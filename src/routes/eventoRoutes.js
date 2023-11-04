import express from "express"
import EventoController from "../controllers/EventoController.js";

const router = express.Router()

router
    .get("/eventos", EventoController.listarEvento)
    .get("/eventos/:id", EventoController.listarEventoId)
    .post("/eventos", EventoController.cadastrarEvento)
    .patch("/eventos/:id", EventoController.atualizarEvento)
    .delete("/eventos/:id", EventoController.deletarEvento)


export default router