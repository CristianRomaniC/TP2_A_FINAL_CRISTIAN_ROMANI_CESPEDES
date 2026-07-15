import {Router} from "express";
import sensorController from "../Container/sensorContainer.js";

const sensorRouter = Router();

sensorRouter.post("/lecturas",sensorController.registrarLectura);

sensorRouter.get("/sensores",sensorController.obtenerSensores);

sensorRouter.get("/alertas",sensorController.obtenerAlertas);

export default sensorRouter;