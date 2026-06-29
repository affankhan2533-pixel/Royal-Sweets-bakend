import { Router, Request, Response } from "express";
import clientPromise from "../db";

const router = Router();

interface StoreSettings {
  whatsappNumber: string;
  bannerText: string;
  bannerActive: boolean;
  storeHours: string;
  kitchenOpen: boolean;
  }

let localSettings: StoreSettings = {
  whatsappNumber: "+91 98765 43210",
  bannerText: "✨ Royal Diwali Special: Order 1kg or more and receive a complimentary 250g assortment tin. Code: DIWALI26 ✨",
  bannerActive: false,
  storeHours: "9:00 AM - 10:00 PM",
  kitchenOpen: true,
};

// GET settings
router.get("/", async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    if (!client) {
      return res.json({ settings: localSettings });
    }
    const db = client.db("royalsweet");
    const settings = await db.collection("settings").findOne({ _id: "store_settings" as any });
    return res.json({ settings: settings || localSettings });
  } catch (err) {
    console.error("Error fetching settings from MongoDB:", err);
    return res.json({ settings: localSettings });
  }
});

// POST save settings
router.post("/", async (req: Request, res: Response) => {
  try {
    const newSettings: StoreSettings = req.body;
    
    // Sync in-memory fallback list
    localSettings = { ...localSettings, ...newSettings };

    const client = await clientPromise;
    if (!client) {
      return res.json({ success: true, settings: localSettings, mock: true });
    }

    const db = client.db("royalsweet");
    await db.collection("settings").updateOne(
      { _id: "store_settings" as any },
      { $set: newSettings },
      { upsert: true }
    );

    return res.json({ success: true, settings: newSettings });
  } catch (err) {
    console.error("Error saving settings to MongoDB:", err);
    return res.status(500).json({ error: "Failed to save settings" });
  }
});

export default router;
