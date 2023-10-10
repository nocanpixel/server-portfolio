import express from "express";
import cors from "cors";
import { sequelize } from "./config/db-config.mjs";
import apiRouter from "./api/index.mjs";
import "./associations/index.mjs";

const app = express();
app.use(express.json())

const allowedOrigins = ['http://localhost:3000', 'https://camilo.vercel.app']

app.use(cors({
  origin: allowedOrigins,
}));


// Main route api list

app.use("/api", apiRouter);

//Sync database

sequelize.sync();



// Your other middleware and routes go here.

// Start your Express server on a specific port.
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
