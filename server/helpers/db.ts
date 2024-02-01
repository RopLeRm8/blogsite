import { Response } from "express";
import db from "../models/db";
import { IUser } from "../types/db";

const oneWeek = 7 * 24 * 60 * 60 * 1000;

export const setupSession = async (
  user: IUser,
  res: Response,
  sessionId: string,
  rememberMe: boolean
) => {
  const userId = user.id;
  const expiresAt = new Date(Date.now() + (rememberMe ? oneWeek : 3600 * 1000));
  await db.Session.create({
    sessionId: sessionId,
    userId: userId,
    expiresAt: expiresAt,
  });

  res
    .status(201)
    .cookie("sessionId", sessionId, {
      httpOnly: true,
      maxAge: rememberMe ? oneWeek : 3600 * 1000,
      secure: process.env.NODE_ENV === "production",
    })
    .json({ message: "Login successful!" });
};
