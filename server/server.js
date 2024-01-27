import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api", userRoutes);
const PORT = process.env.GLOBAL_SERVERPORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
