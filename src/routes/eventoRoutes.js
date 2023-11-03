import express from "express"
import EventoController from "../controllers/EventoController.js";

const router = express.Router()

router
    .get("/eventos", EventoController.listarEvento)


export default router