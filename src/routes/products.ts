import { Router, Request, Response } from "express";
import clientPromise from "../db";
import { INITIAL_SWEETS, SweetProduct } from "../mockData";
import fs from "fs";
import path from "path";

const router = Router();

// Maintain an in-memory list for fallback/mock mode
let localProducts: SweetProduct[] = [...INITIAL_SWEETS];

// Helper to seed database if empty or missing new items
async function seedDatabaseIfEmpty(db: any) {
  try {
    console.log("Syncing database with initial products catalog...");
    for (const sweet of INITIAL_SWEETS) {
      await db.collection("products").updateOne(
        { id: sweet.id },
        { $set: sweet },
        { upsert: true }
      );
    }
    const currentIds = INITIAL_SWEETS.map((s) => s.id);
    await db.collection("products").deleteMany({ id: { $nin: currentIds } });
  } catch (err) {
    console.error("Failed to seed/sync database:", err);
  }
}

// POST upload base64 image
router.post("/upload", async (req: Request, res: Response) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: "No image data provided" });
    }

    // Extract base64 data
    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return res.status(400).json({ error: "Invalid base64 image format" });
    }

    const type = matches[1];
    const buffer = Buffer.from(matches[2], "base64");

    // Generate a random filename with correct extension
    let extension = "png";
    if (type.includes("jpeg") || type.includes("jpg")) extension = "jpg";
    else if (type.includes("webp")) extension = "webp";
    else if (type.includes("gif")) extension = "gif";

    const filename = `sweet_${Date.now()}.${extension}`;
    const uploadDir = path.join(__dirname, "../../uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, buffer);

    const host = req.get("host");
    const protocol = req.protocol;
    const resolvedProtocol = req.headers["x-forwarded-proto"] || protocol;
    const fullUrl = `${resolvedProtocol}://${host}/uploads/${filename}`;

    return res.json({ success: true, url: fullUrl });
  } catch (err) {
    console.error("Error processing image upload:", err);
    return res.status(500).json({ error: "Failed to upload image" });
  }
});

// GET all products
router.get("/", async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    if (!client) {
      return res.json({ products: localProducts });
    }
    const db = client.db("royalsweet");
    await seedDatabaseIfEmpty(db);
    const products = await db.collection("products").find({}).toArray();
    return res.json({ products });
  } catch (err) {
    console.error("Error fetching products from MongoDB:", err);
    return res.json({ products: localProducts });
  }
});

// POST create new product
router.post("/", async (req: Request, res: Response) => {
  try {
    const productData: SweetProduct = req.body;
    if (!productData.name) {
      return res.status(400).json({ error: "Product name is required" });
    }

    // Generate id from name if not provided
    if (!productData.id) {
      productData.id = productData.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    }

    const client = await clientPromise;
    if (!client) {
      localProducts.push(productData);
      return res.json({ success: true, product: productData, mock: true });
    }

    const db = client.db("royalsweet");
    await db.collection("products").updateOne(
      { id: productData.id },
      { $set: productData },
      { upsert: true }
    );

    // Sync in-memory fallback list
    const index = localProducts.findIndex((p) => p.id === productData.id);
    if (index >= 0) {
      localProducts[index] = productData;
    } else {
      localProducts.push(productData);
    }

    return res.json({ success: true, id: productData.id });
  } catch (err) {
    console.error("Error creating product:", err);
    return res.status(500).json({ error: "Failed to create product" });
  }
});

// PUT update product
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData: SweetProduct = req.body;

    const client = await clientPromise;
    if (!client) {
      const index = localProducts.findIndex((p) => p.id === id);
      if (index >= 0) {
        localProducts[index] = { ...localProducts[index], ...productData, id };
        return res.json({ success: true, product: localProducts[index], mock: true });
      }
      return res.status(404).json({ error: "Product not found" });
    }

    const db = client.db("royalsweet");
    const result = await db.collection("products").updateOne(
      { id },
      { $set: productData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Product not found in database" });
    }

    // Sync in-memory fallback list
    const index = localProducts.findIndex((p) => p.id === id);
    if (index >= 0) {
      localProducts[index] = { ...localProducts[index], ...productData, id };
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Error updating product:", err);
    return res.status(500).json({ error: "Failed to update product" });
  }
});

// DELETE product
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const client = await clientPromise;
    if (!client) {
      localProducts = localProducts.filter((p) => p.id !== id);
      return res.json({ success: true, mock: true });
    }

    const db = client.db("royalsweet");
    const result = await db.collection("products").deleteOne({ id });

    // Sync in-memory fallback list
    localProducts = localProducts.filter((p) => p.id !== id);

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found in database" });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Error deleting product:", err);
    return res.status(500).json({ error: "Failed to delete product" });
  }
});

export default router;
