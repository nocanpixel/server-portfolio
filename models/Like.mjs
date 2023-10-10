import { Sequelize } from "sequelize";
import { sequelize } from "../config/db-config.mjs";

export const Like = sequelize.define("like", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  like: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
