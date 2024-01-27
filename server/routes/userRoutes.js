import express from "express";
const router = express.Router();
import register from "../controllers/registration.js";
import { verifyUser } from "../controllers/verification.js";

router.get("/user/verify", verifyUser);
router.post("/user/register", register);
export default router;
