import SensorController from "../Controllers/SensorController.js";
import SensorService from "../Services/SensorService.js";

const sensorService = new SensorService();

const sensorController = new SensorController(sensorService);

export default sensorController;



