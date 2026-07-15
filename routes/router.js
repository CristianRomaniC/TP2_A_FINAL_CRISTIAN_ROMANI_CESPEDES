import { Router } from "express";
import sensorRouter from "./sensorRoutes.js";

const router = Router();

router.use(sensorRouter);

export default router;