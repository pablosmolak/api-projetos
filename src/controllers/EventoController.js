import eventos from "../models/Evento.js"


class EventoController{

    static listarEvento = async (req,res) => {
       try {

        eventos.find()
            .then((resp) => {
                res.status(200).json(resp)
            })

        }catch(err){
            //console.log(err)
            return res.status(500).json({error: true, code: 500, message: "Erro interno do Servidor!"})
        }
    }

    static listarEventoId = async (req,res) => {
        try{

            let id = req.params.id

            eventos.findById(id)
                .then((resp) => {
                    let even = JSON.parse(JSON.stringify(resp))
                
                    return res.status(200).send(even)
                })
                .catch((err) => {
                    console.log(err)
                    return res.status(404).json({error: true, code: 404, message: "Evento não encontrado!"})
                })

        }catch(err){
            console.log(err)
            return res.status(500).json({error: true, code: 500, message: "Erro interno do Servidor!"})
        }
    }
}

export default EventoController