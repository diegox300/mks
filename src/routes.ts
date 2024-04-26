import { Router } from "express";
import { FilmeController } from "./controllers/FilmeController";

const routes = Router()

routes.post('/filmes', new FilmeController().create)
routes.get('/filmes', new FilmeController().list)
routes.delete('/filmes/:id', new FilmeController().delete)
routes.put('/filmes/:id', new FilmeController().update)

export default routes