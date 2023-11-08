import express from "express";
import connectDB from "./config/db.js";
const app = express();

const PORT = process.env.PORT || 5000;
//MongoDB Connection Setup
connectDB();

app.listen(PORT, () => {
  console.log(`API is running on http://localhots:${PORT} `);
});
