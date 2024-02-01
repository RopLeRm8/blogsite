import { Request, Response } from "express";
import { authUserRequest } from "../types/req";

const authenticate = (req: Request, res: Response) => {
  const rq = req as authUserRequest;
  if (!rq.user) {
    return res.status(404).json({ error: "User not found" });
  }
  const { password, isVerified, verificationToken, id, ...userData } =
    rq.user.dataValues;
  res.json(userData);
};

export default authenticate;
