import { Request, Response } from "express"
import { filmeRepository } from "../repositories/filmeRepository"

export class FilmeController {
  async create (req: Request, res: Response){
    const {nome,sinopse} = req.body

    if (!nome){
      return res.status(400).json ({message: "O nome e obrigatorio"})
    }

    if (!sinopse){
      return res.status(400).json ({message: "A Sinopse e obrigatorio"})
    }

    try {

      const newFilme = filmeRepository.create({nome,sinopse})

      await filmeRepository.save(newFilme)

      return res.status(201).json(newFilme)
        
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: "Internal Server Error"})
    }
  }

  async list (req: Request, res: Response) {

    try {

    const filmes = await filmeRepository.find()

    return res.json(filmes)
      
    } catch (error) {

      console.log(error)
      return res.status(500).json({message: "Internal Server Error"})
      
    }
    
  }

  async delete (req: Request, res: Response){
    const {id} = req.params

    try {

      await filmeRepository.delete(id)

      return res.json({message: "Sucess"})
        
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: "Internal Server Error delete"})
    }
  }

  async update (req: Request, res: Response){
    const {id, nome,sinopse} = req.body
   

    if (!nome){
      return res.status(400).json ({message: "O nome e obrigatorio"})
    }

    if (!sinopse){
      return res.status(400).json ({message: "A Sinopse e obrigatorio"})
    }

    try {

      const putFilme = filmeRepository.create({id, nome,sinopse})

      await filmeRepository.save(putFilme)

      return res.status(201).json(putFilme)
        
    } catch (error) {
      console.log(error)
      return res.status(500).json({message: "Internal Server Error deletee"})
    }
  }

}