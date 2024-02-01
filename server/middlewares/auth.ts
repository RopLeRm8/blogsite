import { RequestHandler } from "express";
import db from "../models/db";
import { ISession, IUser } from "../types/db";
import { AuthMiddleware, authUserRequest } from "../types/req";

const oneWeek = 7 * 24 * 60 * 60 * 1000;

const authenticate: AuthMiddleware = async (req, res, next) => {
  const sessionId = req.cookies.sessionId;
  if (!sessionId) {
    return res.redirect(`http://${process.env.GLOBAL_CLIENTHOST}/login`);
  }

  const session = (await db.Session.findOne({
    where: { sessionId: sessionId },
  })) as ISession | null;

  if (!session || session.expiresAt < new Date()) {
    res.clearCookie("sessionId");
    await db.Session.destroy({
      where: { sessionId: sessionId },
    });
    return res.redirect(`http://${process.env.GLOBAL_CLIENTHOST}/login`);
  }

  const newExpiryDate = new Date(Date.now() + oneWeek);
  await db.Session.update(
    { expiresAt: newExpiryDate },
    {
      where: { sessionId: sessionId },
    }
  );

  const user = (await db.User.findOne({
    where: { id: session.userId },
  })) as IUser | null;

  if (!user) {
    return res.redirect(`http://${process.env.GLOBAL_CLIENTHOST}/login`);
  }

  req.user = user;
  next();
};

export const authenticateTyped: RequestHandler = (req, res, next) => {
  authenticate(req as authUserRequest, res, next);
};
