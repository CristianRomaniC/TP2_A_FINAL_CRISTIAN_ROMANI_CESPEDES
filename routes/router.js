import {Router} from "express";
import controller from "../Container/Container.js";

const router = Router();

router.get("/", controller.getAll);

export default router;