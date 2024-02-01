import db from "../models/db";
import { IRouteHandlerCustom } from "../types/main";

const logout: IRouteHandlerCustom = async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    res.clearCookie("sessionId");

    if (sessionId) {
      await db.Session.destroy({
        where: { sessionId: sessionId },
      });
    }

    res.status(200).json({ message: "Logout successful!" });
  } catch (e) {
    res.status(500).json({ error: `Error processing logout: ${e}` });
  }
};

export default logout;
