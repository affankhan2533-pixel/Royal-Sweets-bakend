import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";
import clientPromise from "../db";

const router = Router();

interface Review {
  _id: string | ObjectId;
  name: string;
  location: string;
  review: string;
  rating: number;
  createdAt: Date;
}

let localReviews: Review[] = [
  {
    _id: "mock-r1",
    name: "Priya Sharma",
    location: "Bandra, Mumbai",
    review: "The Kaju Katli here is unlike anything I've had before. It melts on the tongue. I ordered 2kg for Diwali and everyone asked where I got it from.",
    rating: 5,
    createdAt: new Date(Date.now() - 3600000 * 2)
  },
  {
    _id: "mock-r2",
    name: "Rajesh Mehta",
    location: "Sion, Mumbai",
    review: "Royal Sweet is a hidden gem of Dharavi. The Motichoor Ladoo is made fresh daily. You can taste the tradition in every bite.",
    rating: 5,
    createdAt: new Date(Date.now() - 3600000 * 5)
  }
];

// GET reviews
router.get("/", async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    if (!client) {
      return res.json({ reviews: localReviews });
    }
    const db = client.db("royalsweet");
    const reviews = await db.collection("reviews").find({}).sort({ createdAt: -1 }).limit(20).toArray();
    return res.json({ reviews: reviews.length ? reviews : localReviews });
  } catch (err) {
    console.error("Error fetching reviews from MongoDB:", err);
    return res.json({ reviews: localReviews });
  }
});

// POST review
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, location, review, rating } = req.body;
    if (!name || !review) {
      return res.status(400).json({ error: "Name and review required" });
    }

    const newReview: Review = {
      _id: "",
      name,
      location: location || "Mumbai",
      review,
      rating: Math.min(5, Math.max(1, rating || 5)),
      createdAt: new Date()
    };

    const client = await clientPromise;
    if (!client) {
      newReview._id = "mock-r" + Date.now();
      localReviews.unshift(newReview);
      return res.json({ success: true, id: newReview._id, mock: true });
    }

    const db = client.db("royalsweet");
    const result = await db.collection("reviews").insertOne({
      name: newReview.name,
      location: newReview.location,
      review: newReview.review,
      rating: newReview.rating,
      createdAt: newReview.createdAt
    });

    newReview._id = result.insertedId;
    localReviews.unshift(newReview);

    return res.json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error("Error saving review to MongoDB:", err);
    return res.status(500).json({ error: "Failed to save review" });
  }
});

// DELETE review
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Sync in-memory fallback list
    localReviews = localReviews.filter((rev) => String(rev._id) !== id);

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

    const result = await db.collection("reviews").deleteOne(query);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Review not found in database" });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Error deleting review from MongoDB:", err);
    return res.status(500).json({ error: "Failed to delete review" });
  }
});

export default router;
