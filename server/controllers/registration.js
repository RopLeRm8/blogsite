import bcrypt from "bcrypt";
import db from "../models/db.js";
import transporter from "../config/nodemailer.js";
import { v4 as uuidv4 } from "uuid";
import {
  checkEmpty,
  isUserExist,
  validateInputs,
} from "../helpers/registration.js";
import dotenv from "dotenv";
dotenv.config();

export default async function register(req, res) {
  try {
    const emptyFieldError = checkEmpty(req.body);
    if (emptyFieldError) {
      return res.status(500).json(emptyFieldError);
    }
    const validationFieldError = validateInputs(req.body);
    if (validationFieldError) {
      return res.status(500).json(validationFieldError);
    }
    const userExists = await isUserExist(req.body, db);
    if (userExists) {
      return res.status(500).json(userExists);
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
      return res.status(500).json({ error: "Error sending mail" });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      verificationToken: verificationToken,
      isVerified: false,
    });

    return res.status(201).json({
      message: `Verification email sent to ${req.body.email}!`,
      user: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Error sending mail" });
  }
}
