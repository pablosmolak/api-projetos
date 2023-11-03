import mongoose from "mongoose"
import * as dotenv from "dotenv"

dotenv.config()

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB conectado com sucesso!")
}).catch((error) => {
    console.log("Erro na conexão com o MongoDB:" + error)
})

let db = mongoose.connection;

export default db;