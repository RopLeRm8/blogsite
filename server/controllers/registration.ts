import bcrypt from "bcrypt";
import db from "../models/db";
import transporter from "../config/nodemailer";
import { v4 as uuidv4 } from "uuid";
import { checkEmpty, isUserExist, validateInputs } from "../helpers/auth";
import dotenv from "dotenv";
import { IRouteHandlerCustom } from "../types/main";
dotenv.config();

const register: IRouteHandlerCustom = async (req, res) => {
  try {
    const isEmpty = checkEmpty(req.body);
    if (isEmpty) {
      return res.status(400).json(isEmpty);
    }
    const validationFieldError = validateInputs(req.body);
    if (validationFieldError) {
      return res.status(400).json(validationFieldError);
    }
    const userExists = await isUserExist(req.body, db);
    if (userExists) {
      return res.status(409).json(userExists);
    }

    const verificationToken = uuidv4();
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: req.body.email,
      subject: "Verify your email",
      html: `<p>Please click the link below to verify your email and complete the registration:</p>
      <p><a href="http://${process.env.GLOBAL_SERVERHOST}/api/user/verify?token=${verificationToken}">Verify Email</a></p>`,
    };
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      return res.status(503).json({ error: "Error sending mail" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      verificationToken: verificationToken,
      isVerified: false,
    });

    return res.status(200).json({
      message: `Verification email sent to ${req.body.email}!`,
      user: user,
    });
  } catch (error) {
    res.status(503).json({ error: "Error sending mail" });
  }
};

export default register;
