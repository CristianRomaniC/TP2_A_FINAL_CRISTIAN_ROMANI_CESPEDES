import Sensor from "../Models/Sensor.js"
import Alerta from "../Models/Alerta.js"

class SensorService{
    constructor() {
        this.sensores = [];
        this.alertas = [];
    }

        obtenerSensores = () => {
        return this.sensores;
    }

        obtenerAlertas = () => {
        return this.alertas
    }

    registrarLectura(lectura) {

        this.validarLectura(lectura);

        let sensor = this.buscarSensor(lectura.id);

        if (sensor) {
            sensor = this.actualizarSensor(sensor, lectura);
        } else {
            sensor = this.crearSensor(lectura);
        }

        const alerta = this.evaluarAlerta(sensor);

        if (alerta) {
            this.alertas.push(alerta);
        }

        const respuesta = {
            ...sensor,
            alerta: alerta ? alerta.mensaje : null
        };
        return respuesta;
    }


    data =[]

    getAll = async()=>{
        return this.data;
    }

    //Metodos Privados
    validarLectura(lectura) {
        const { id, tipo, valor, timestamp } = lectura;
        if (!/^[A-Za-z0-9]{8}$/.test(id)) {
            throw new Error("El id debe tener exactamente 8 caracteres alfanuméricos.");
        }
        const tiposValidos = [
            "TEMPERATURA",
            "HUMEDAD",
            "CO2"
        ];
        if (!tiposValidos.includes(tipo)) {
            throw new Error("El tipo de sensor es inválido.");
        }
        if (typeof valor !== "number") {
            throw new Error("El valor debe ser numérico.");
        }
        if (typeof timestamp !== "string") {
            throw new Error("El timestamp debe ser un string.");
        }
    }

    buscarSensor(id) {
        return this.sensores.find(
            sensor => sensor.id === id
        );
    }

    crearSensor(lectura) {
        const sensor = new Sensor(
            lectura.id,
            lectura.tipo,
            lectura.valor,
            lectura.timestamp
        );
        this.sensores.push(sensor);
        return sensor;
    }

    actualizarSensor(sensor, lectura) {
        sensor.tipo = lectura.tipo;
        sensor.valor = lectura.valor;
        sensor.timestamp = lectura.timestamp;
        return sensor;
    }

    evaluarAlerta(sensor) {
        switch (sensor.tipo) {
            case "TEMPERATURA":
                if (sensor.valor > 35) {
                    return new Alerta(
                        sensor.id,
                        sensor.tipo,
                        sensor.valor,
                        sensor.timestamp,
                        "TEMPERATURA alta"
                    );
                }
                break;

            case "HUMEDAD":
                if (sensor.valor < 20) {
                    return new Alerta(
                        sensor.id,
                        sensor.tipo,
                        sensor.valor,
                        sensor.timestamp,
                        "HUMEDAD baja"
                    );
                }
                break;

            case "CO2":
                if (sensor.valor > 1000) {
                    return new Alerta(
                        sensor.id,
                        sensor.tipo,
                        sensor.valor,
                        sensor.timestamp,
                        "CO2 alto"
                    );
                }
                break;
        }

        return null;
    }
}

export default SensorService;