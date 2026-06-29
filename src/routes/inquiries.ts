import { Router, Request, Response } from "express";
import { ObjectId } from "mongodb";
import clientPromise from "../db";
import nodemailer from "nodemailer";

const router = Router();

// Maintain an in-memory list for fallback/mock mode
interface Inquiry {
  _id: string | ObjectId;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  createdAt: Date;
}

let localInquiries: Inquiry[] = [
  {
    _id: "mock-1",
    name: "Aarav Sharma",
    email: "aarav@example.com",
    phone: "9876543210",
    type: "Corporate Gifting",
    message: "Would like to inquire about 150 gold boxes of assorted sweets for Diwali gifting.",
    createdAt: new Date(Date.now() - 3600000 * 4) // 4 hours ago
  },
  {
    _id: "mock-2",
    name: "Diya Iyer",
    email: "diya@example.com",
    phone: "9123456789",
    type: "Wedding Distribution",
    message: "Planning sweet distribution boxes (500g size) for our wedding guest invites in dadar.",
    createdAt: new Date(Date.now() - 3600000 * 24) // 24 hours ago
  }
];

// GET all inquiries
router.get("/", async (req: Request, res: Response) => {
  try {
    const client = await clientPromise;
    if (!client) {
      return res.json({ inquiries: localInquiries });
    }
    const db = client.db("royalsweet");
    const inquiries = await db.collection("inquiries").find({}).sort({ createdAt: -1 }).toArray();
    return res.json({ inquiries });
  } catch (err) {
    console.error("Error fetching inquiries from MongoDB:", err);
    return res.json({ inquiries: localInquiries });
  }
});

// POST save inquiry
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, type, message } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: "Name and contact number required" });
    }

    const newInquiry: Inquiry = {
      _id: "",
      name,
      email: email || "",
      phone,
      type: type || "General Inquiry",
      message: message || "",
      createdAt: new Date()
    };

    const client = await clientPromise;
    if (!client) {
      newInquiry._id = "mock-" + Date.now();
      localInquiries.unshift(newInquiry);
      return res.json({ success: true, id: newInquiry._id, mock: true });
    }

    const db = client.db("royalsweet");
    const result = await db.collection("inquiries").insertOne({
      name: newInquiry.name,
      email: newInquiry.email,
      phone: newInquiry.phone,
      type: newInquiry.type,
      message: newInquiry.message,
      createdAt: newInquiry.createdAt
    });

    newInquiry._id = result ? result.insertedId : "mock-" + Date.now();
    localInquiries.unshift(newInquiry);

    // Send email via Nodemailer
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: `"Royal Sweets Web" <${process.env.SMTP_USER}>`,
          to: process.env.SMTP_RECEIVER || process.env.SMTP_USER,
          replyTo: email || undefined,
          subject: `👑 New Web Inquiry: ${type || "General"} - ${name}`,
          text: `You have received a new inquiry from your website:\n\n` +
                `Name: ${name}\n` +
                `Phone: ${phone}\n` +
                `Email: ${email || "Not provided"}\n` +
                `Type: ${type || "General Inquiry"}\n\n` +
                `Message:\n${message || "No message content."}\n\n` +
                `Submitted at: ${new Date().toLocaleString()}`,
          html: `<div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #D4A843; padding: 20px; border-radius: 8px;">` +
                `<h2 style="color: #D4A843; border-bottom: 2px solid #D4A843; padding-bottom: 10px; margin-top: 0;">👑 Royal Sweets Inquiry</h2>` +
                `<p><strong>Name:</strong> ${name}</p>` +
                `<p><strong>Phone:</strong> ${phone}</p>` +
                `<p><strong>Email:</strong> ${email || "Not provided"}</p>` +
                `<p><strong>Type:</strong> ${type || "General Inquiry"}</p>` +
                `<p><strong>Message:</strong></p>` +
                `<blockquote style="background: #FAF6EE; border-left: 4px solid #D4A843; padding: 12px; margin: 10px 0;">${(message || "No message content.").replace(/\n/g, "<br/>")}</blockquote>` +
                `<hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;"/>` +
                `<p style="font-size: 0.8rem; color: #888;">Submitted via Royal Sweet Web Portal on ${new Date().toLocaleString()}</p>` +
                `</div>`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Inquiry email notification sent successfully via SMTP.");
      } catch (mailErr) {
        console.warn("SMTP credentials set but failed to send email:", mailErr);
      }
    } else {
      console.log("SMTP credentials missing in .env — skipping email dispatch.");
    }

    return res.json({ success: true, id: newInquiry._id });
  } catch (err) {
    console.error("Error saving inquiry to MongoDB:", err);
    return res.status(500).json({ error: "Failed to save inquiry" });
  }
});

// DELETE inquiry
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Sync in-memory fallback list
    localInquiries = localInquiries.filter((inq) => String(inq._id) !== id);

    const client = await clientPromise;
    if (!client) {
      return res.json({ success: true, mock: true });
    }

    const db = client.db("royalsweet");
    let query = {};
    if (ObjectId.isValid(id)) {
      query = { _id: new ObjectId(id) };
    } else {
      query = { _id: id }; // Handles mock/string IDs in DB if any
    }

    const result = await db.collection("inquiries").deleteOne(query);
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Inquiry not found in database" });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Error deleting inquiry from MongoDB:", err);
    return res.status(500).json({ error: "Failed to delete inquiry" });
  }
});

export default router;
