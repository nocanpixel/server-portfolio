import express from "express";
import cors from "cors";
import { sequelize } from "./config/db-config.mjs";
import apiRouter from "./api/index.mjs";
import "./associations/index.mjs";
import cookieParser from "cookie-parser";
import Fingerprint from "express-fingerprint";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(Fingerprint());


const allowedOrigins = ['http://localhost:3000', 'https://www.cambe.app']

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
