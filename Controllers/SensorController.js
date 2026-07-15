class SensorController {
    
    constructor(sensorService){
        this.sensorService = sensorService;
    }

    obtenerSensores = (req, res) => {
        try{
            const sensores = this.sensorService.obtenerSensores();
            res.status(200).json(sensores);
        }catch(error){
            res.status(400).json({
                errorMsg:error.message
            });
        }
    };

    obtenerAlertas = (req, res) => {
        try{
            const alertas = this.sensorService.obtenerAlertas();
            res.status(200).json(alertas);

        }catch(error){
            res.status(400).json({
                errorMsg:error.message
            });
        }
    };

    registrarLectura = (req, res) => {
        try{
            const lectura = req.body;
            const resultado = this.sensorService.registrarLectura(lectura);
            res.status(200).json(resultado);
        }catch(error){
            res.status(400).json({errorMsg: error.message})
        }
    }

}

export default SensorController;