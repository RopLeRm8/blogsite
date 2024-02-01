import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", userRoutes);
const PORT = process.env.GLOBAL_SERVERPORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
