import { DataTypes as DataTypesStatic, Sequelize } from "sequelize";

export default (sequelize: Sequelize, DataTypes: typeof DataTypesStatic) => {
  const Session = sequelize.define("Session", {
    sessionId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Session;
};
