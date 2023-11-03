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
}

export default EventoController