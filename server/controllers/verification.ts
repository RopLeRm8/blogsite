import db from "../models/db";
import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { IUser } from "../types/db";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;
    const user = (await db.User.findOne({
      where: { verificationToken: token },
    })) as IUser | null;
    if (!user) {
      return res.status(500).send("Invalid token or user does not exist.");
    }
    await db.User.update(
      { isVerified: true, verificationToken: null },
      { where: { id: user.id } }
    );
    return res.redirect(`http://${process.env.GLOBAL_CLIENTHOST}/something`);
  } catch (error) {
    res.status(500).send("Failed to verify email.");
  }
};
