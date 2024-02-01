import { checkEmpty } from "../helpers/auth";
import db from "../models/db";
import bcrypt from "bcrypt";
import { IRouteHandlerCustom } from "../types/main";
import { IUser } from "../types/db";
import { generateSessionId } from "../helpers/crypto";
import { setupSession } from "../helpers/db";

const login: IRouteHandlerCustom = async (req, res) => {
  try {
    const isEmpty = checkEmpty(req.body);
    if (isEmpty) return res.status(400).json(isEmpty);

    const { email, password, rememberMe } = req.body;
    const user = (await db.User.findOne({
      where: { email: email },
    })) as IUser | null;
    if (!user)
      return res.status(404).json({ error: "Wrong email/password entered" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ error: "Wrong email/password entered" });
    const isUserVerified = user.isVerified;
    if (!isUserVerified)
      return res
        .status(400)
        .json({ error: "Please verify your account to log in" });
    // success
    const userId = user.id;
    const existingSession = await db.Session.findOne({
      where: { userId: userId },
    });
    if (existingSession)
      return res.status(200).json({ message: "Login successful!" });
    const sessionId = generateSessionId();
    await setupSession(user, res, sessionId, rememberMe);
  } catch (e) {
    res.status(503).json({ error: `Error connecting to the server : ${e}` });
  }
};

export default login;
