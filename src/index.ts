import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import productsRouter from "./routes/products";
import inquiriesRouter from "./routes/inquiries";
import reviewsRouter from "./routes/reviews";
import settingsRouter from "./routes/settings";
import ordersRouter from "./routes/orders";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// Enable CORS for frontends (allowing local development on localhost:3000 by default or specific domain)
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/products", productsRouter);
app.use("/api/inquiries", inquiriesRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/orders", ordersRouter);

// Health check and root endpoints
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

app.get("/", (req, res) => {
  res.send("Royal Sweets API Server is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
