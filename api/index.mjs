import express from "express";
import {default as mainRouter } from "./methods.mjs"

const apiRouter = express();

apiRouter.use('/', mainRouter);

export default apiRouter;