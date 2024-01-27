import db from "../models/db.js";
import dotenv from "dotenv";
dotenv.config();
export const verifyUser = async (req, res) => {
  try {
    const { token } = req.query;
    const user = await db.User.findOne({ where: { verificationToken: token } });
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
