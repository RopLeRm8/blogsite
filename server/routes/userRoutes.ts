import express from "express";
import register from "../controllers/registration";
import { verifyUser } from "../controllers/verification";
import login from "../controllers/login";
import { authenticateTyped } from "../middlewares/auth";
import authenticate from "../controllers/auth";
import logout from "../controllers/logout";

const router = express.Router();

router.get("/user/verify", verifyUser);
router.post("/user/register", register);
router.post("/user/login", login);
router.post("/user/logout", logout);

router.get("/user/authenticate", authenticateTyped, authenticate);

export default router;
