import {Router} from "express";
import kartingController from "../controllers/karting.controller"
import { authMiddleware } from "../middlewares/auth.middleware";
const router = Router();

router.get("/",authMiddleware, kartingController.getAll);
router.get("/:id", kartingController.getById);

router.post("/", kartingController.create);

router.put("/:id", kartingController.update);

router.delete("/:id", kartingController.delete);

export default router;