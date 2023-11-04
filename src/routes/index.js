import express from "express";
import evento from "./eventoRoutes.js"

const routes = (app) => {
    
    app.use(
        express.json(),
        evento
    )

    app.get("*", (req, res, next) => {
        res.status(404).send({error: true, code: 404, message: "Rota não encontrada!"})
    })
}

export default routes