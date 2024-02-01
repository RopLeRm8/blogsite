import { DataTypes, Sequelize } from "sequelize";
import sequelizeConfig from "../config/sequalize";
import userModel from "./user";
import sessionModel from "./session";
const sequelize = new Sequelize(sequelizeConfig);

const db = {
  sequelize,
  Sequelize,
  User: userModel(sequelize, DataTypes),
  Session: sessionModel(sequelize, DataTypes),
};

export default db;
