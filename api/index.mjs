import express from "express";
import mainController from "../controllers/mainController.mjs"

const appiRouter = express();

const controller = new mainController();

appiRouter.use('/', (req, res) => {
    controller.welcome(req, res);
});

export { appiRouter }