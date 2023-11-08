import express from "express";
import connectDB from "./config/db.js";
const app = express();
import authRoutes from "./routes/authRoutes.js";

const PORT = process.env.PORT || 5000;
//--------------  MongoDB Connection Setup  ---------------
connectDB();

//--------------  Routes ---------------
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`API is running on http://localhots:${PORT} `);
});
