import { Request, Response } from "express";

type IRouteHandlerCustom =
  | ((req: Request, res: Response) => Promise<void>)
  | ((req: Request, res: Response) => void);

export type { IRouteHandlerCustom };
