import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.ROOT,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
        rejectUnauthorized: false, // Disable rejecting unauthorized connections (not recommended for production)
      },
    },
  }
);
