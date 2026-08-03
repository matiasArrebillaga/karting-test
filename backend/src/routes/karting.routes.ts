import {Router} from "express";
import kartingController from "../controllers/karting.controller"

const router = Router();

router.get("/", kartingController.getAll);
router.get("/", kartingController.getById);
router.post("/", kartingController.create);
router.put("/", kartingController.update);
router.put("/", kartingController.delete);
export default router;