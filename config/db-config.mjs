import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE||"portfolio-db",
  process.env.ROOT||"root",
  process.env.PASSWORD||"localhost123",
  {
    host: process.env.HOST||"localhost",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
        rejectUnauthorized: false, // Disable rejecting unauthorized connections (not recommended for production)
      },
    },
  }
);
