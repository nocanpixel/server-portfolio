import express from "express";
import mainController from "../controllers/mainController.mjs";
const router = express.Router();

const controller = new mainController();

router.get('/', controller.registerClient);
router.post('/like', controller.like);

export default router;