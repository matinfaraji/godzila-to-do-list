import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());

const PORT: number | string = process.env.APP_PORT || 5000;

app.use("/users", userRoutes);
const db = async () => {
  try {
    await mongoose.connect(process.env.URL as string);
    console.log("Connected to database ✅");
  } catch (error) {
    console.error(error);
  }
};

db();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
