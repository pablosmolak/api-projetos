//importar sempre que você deseja se comunicar entre arquivos
import express from "express";
import db from './config/dbConect.js'
import routes from './routes/index.js'
import cors from "cors"

db.on("error", console.log.bind(console, "Conexão com o banco falhou!"));
db.once("open", () => {
    console.log('Conexão com o banco estabelecida! ')
});


const app = express() //instanciando o express


app.use(express.json()) //habilitando o uso de json pelo express
app.use(cors()); // habilitando o uso de cors pelo express

routes(app)

export default app