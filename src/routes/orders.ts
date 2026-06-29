import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";
import clientPromise from "../db";

const router = Router();

export interface OrderItem {
  sweetId: string;
  name: string;
  count: number;
  weight: number;
  pricePerKg: number;
  totalCost: number;
}

export interface Order {
  _id?: string | ObjectId;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  deliveryAddress?: string;
  items: OrderItem[];
  totalWeight: number; // grams
  totalPrice: number;
  message?: string;
  type: "Custom Box" | "Single Sweet";
  status: "Pending" | "Completed";
  createdAt: Date;
}

// In-memory fallback list
let localOrders: Order[] = [
  {
    _id: "mock-order-1",
    clientName: "Rahul Verma",
    clientEmail: "rahul@example.com",
    clientPhone: "9876501234",
    items: [
      {
        sweetId: "aflatoon",
        name: "Aflatoon",
        count: 1, // 1 order of 1kg
        weight: 1000, // 1000g
        pricePerKg: 480,
        totalCost: 480
      }
    ],
    totalWeight: 1000,
    totalPrice: 480,
    type: "Single Sweet",
    status: "Pending",
    createdAt: new Date(Date.now() - 3600000 * 2) // 2 hours ago
  }
];

// GET all orders
router.get("/", async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    if (!client) {
      return res.json({ orders: localOrders });
    }
    const db = client.db("royalsweet");
    const orders = await db.collection("orders").find({}).sort({ createdAt: -1 }).toArray();
    return res.json({ orders });
  } catch (err) {
    console.error("Error fetching orders from MongoDB:", err);
    return res.json({ orders: localOrders });
  }
});

// POST save order
router.post("/", async (req: Request, res: Response) => {
  try {
    const { clientName, clientEmail, clientPhone, deliveryAddress, items, totalWeight, totalPrice, message, type } = req.body;

    if (!clientName || !clientPhone || !items || items.length === 0) {
      return res.status(400).json({ error: "Client details and order items are required" });
    }

    const newOrder: Order = {
      clientName,
      clientEmail: clientEmail || "",
      clientPhone,
      deliveryAddress: deliveryAddress || "",
      items,
      totalWeight: Number(totalWeight),
      totalPrice: Number(totalPrice),
      message: message || "",
      type: type || "Single Sweet",
      status: "Pending",
      createdAt: new Date()
    };

    const client = await clientPromise;
    if (!client) {
      newOrder._id = "mock-order-" + Date.now();
      localOrders.unshift(newOrder);
      return res.json({ success: true, id: newOrder._id, mock: true });
    }

    const db = client.db("royalsweet");
    const dbOrder = {
      clientName: newOrder.clientName,
      clientEmail: newOrder.clientEmail,
      clientPhone: newOrder.clientPhone,
      deliveryAddress: newOrder.deliveryAddress,
      items: newOrder.items,
      totalWeight: newOrder.totalWeight,
      totalPrice: newOrder.totalPrice,
      message: newOrder.message,
      type: newOrder.type,
      status: newOrder.status,
      createdAt: newOrder.createdAt
    };
    const result = await db.collection("orders").insertOne(dbOrder);
    
    newOrder._id = result.insertedId;
    localOrders.unshift(newOrder);

    return res.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Error saving order to MongoDB:", err);
    return res.status(500).json({ error: "Failed to save order" });
  }
});

// DELETE complete/remove order
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    localOrders = localOrders.filter((ord) => String(ord._id) !== id);

    const client = await clientPromise;
    if (!client) {
      return res.json({ success: true, mock: true });
    }

    const db = client.db("royalsweet");
    let query = {};
    if (ObjectId.isValid(id)) {
      query = { _id: new ObjectId(id) };
    } else {
      query = { _id: id };
    }

    const result = await db.collection("orders").deleteOne(query);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Order not found in database" });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Error deleting order from MongoDB:", err);
    return res.status(500).json({ error: "Failed to delete order" });
  }
});

export default router;
