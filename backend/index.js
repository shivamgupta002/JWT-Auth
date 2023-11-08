import express from "express";
import connectDB from "./config/db.js";
const app = express();
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;
//--------------  MongoDB Connection Setup  ---------------
connectDB();

app.use(cors());
app.use(express.json());
//--------------  Routes ---------------

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`API is running on http://localhots:${PORT} `);
});
