import mongoose, { version } from "mongoose"

const eventoSchema = new mongoose.Schema(
    {
        titulo : {type: String, required: true, trim: true, minLength: 3, maxLength: 200},
        descricao: {type: String, required: true, trim: true, minLength: 3, maxLength: 200},
        dataInicio: {type: String, required: true, trim: true},
        dataFim: {type: String, required: true, trim: true},
        local: {type: String, required: true, trim: true, minLength: 3, maxLength: 100},
        imagem: {type: String, required: true, trim: true}
    },

    {
        versionKey: "_version"
    }
)

const evento = mongoose.model('evento', eventoSchema)

export default evento