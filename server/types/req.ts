import { NextFunction, Request, Response } from "express";
import { IUser } from "./db";

interface userRequest extends Request {
  username?: string;
  email: string;
  password: string;
  checked: boolean;
}

interface authUserRequest extends Request {
  user: IUser;
}
type AuthMiddleware = (
  req: authUserRequest,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type { userRequest, AuthMiddleware, authUserRequest };
