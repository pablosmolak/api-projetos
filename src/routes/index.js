import express from "express";
import evento from "./eventoRoutes.js"

const routes = (app) => {
    
    app.use(
        express.json(),
        evento
    )
}

export default routes