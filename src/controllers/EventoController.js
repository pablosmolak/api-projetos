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
                .then((evento) => {
                    
                    if(!evento){
                        return res.status(404).json({error: true, code: 404, message: "Evento não encontrado!"})
                    }
                
                    return res.status(200).json(evento)
                })
                .catch((err) => {
                    //console.log(err)
                    return res.status(502).json({error: true, code: 502, message: "ID informado é inválido!"})
                })

        }catch(err){
            //console.log(err)
            return res.status(500).json({error: true, code: 500, message: "Erro interno do Servidor!"})
        }
    }

    static cadastrarEvento = async (req,res) => {
        try{

            let evento = new eventos(req.body)

            evento.save().then(() => {
                return res.status(201).send(evento.toJSON())  
            })

        }catch(err){
            //console.log(err)
            return res.status(500).json({error: true, code: 500, message: "Erro interno do Servidor!"})
        }
    }

    static atualizarEvento = async (req,res) =>{
        try{

            const id = req.params.id

            eventos.findById(id)
                .then(async (evento) =>{
                
                    if(!evento){
                        return res.status(404).json({error: true, code: 404, message: "Evento não encontrado!"})
                    }

                    eventos.findByIdAndUpdate(id, {$set: req.body})
                        .then(() => {
                            res.status(201).json({error: false, code: 201, message: "Evento atualizado com sucesso!"})
                        })
                        .catch((err) => {
                            //console.log(err)
                            return res.status(422).json({error: true, code: 422, message: "Erro nos dados, confira e repita!"})
                        })
                })
                .catch(() => {
                    //console.log(err)
                    return res.status(502).json({error: true, code: 502, message: "ID informado é inválido!"})
                })
        }catch(err){
            //console.log(err)
            return res.status(500).json({error: true, code: 500, message: "Erro interno do Servidor!"})
        }
    }

    static deletarEvento = async (req,res) => {
        try{
            let id = req.params.id
            await eventos.findById(id).then((evento) => {
                
                if(!evento){
                    return res.status(404).json({error: true, code: 404, message: "Evento não encontrado!"})
                }

                eventos.findByIdAndDelete(id).then(() =>{
                    return res.status(201).json({error: false, code: 201, message: "Evento deletado com sucesso!"})
                })

            }).catch((err) => {
                return res.status(502).json({error: true, code: 502, message: "ID informado é inválido!"})
            })
            
            
        }catch(err){
            return res.status(500).json({error: true, code: 500, message: "Erro interno do Servidor!"})
        }
    }
}

export default EventoController