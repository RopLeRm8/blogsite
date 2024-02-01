import { Sequelize } from "sequelize";

type IDB = {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  User: any;
};

type IUser = {
  id?: number;
  username: string;
  email: string;
  password: string;
  isVerified: boolean;
  verificationToken: string | null;
  dataValues: IUser;
};
type ISession = {
  sessionId: number;
  userId: number;
  expiresAt: Date;
};

export type { IDB, IUser, ISession };
