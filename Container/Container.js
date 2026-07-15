import Controller from "../Controllers/Controller.js";
import Service from "../Services/Service.js";

const service = new Service();

const controller = new Controller(service);

export default controller;



