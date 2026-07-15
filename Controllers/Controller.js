class Controller {

    constructor(service){
        this.service = service;
    }

    getAll=async(req, res)=>{
        try {
            const data = await this.service.getAll();
            res.status(200).send({message:data});
        } catch (error) {
            res.status(400).send({message: error.message});
        }
    }    
}

export default Controller;