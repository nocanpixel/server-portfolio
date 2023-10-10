import { Sequelize } from "sequelize";
import { sequelize } from "../config/db-config.mjs";

export const Client = sequelize.define("client", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
