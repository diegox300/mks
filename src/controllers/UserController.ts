import { userRepository } from "../repositories/userRepository"

export class UserController { 

  async create (req: Request, res: Response){

    const {name, email, password } = req.body

    const userExists = await userRepository.findOneBy({email})
    
    if (userExists){
      return res.status(400).json ({message: "email ja existe!"})
    }

  }
}