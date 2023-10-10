import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "portfolio-db",
  "fl0user",
  "a9ZfNXjlEK4D",
  {
    host: "ep-divine-snow-17280673.eu-central-1.aws.neon.fl0.io",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
        rejectUnauthorized: false, // Disable rejecting unauthorized connections (not recommended for production)
      },
    },
  }
);
