
import { ICreateUserDTO } from "@entity/Users/IUsersRepository";
import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { UsersRepository } from "@src/entity/Users/UsersRepository";
import { Response, Request } from "express";



class CreateUserUseCase {

  async execute(request:Request, response:Response):Promise<Response>{

    const data:ICreateUserDTO = {
      cellphone:      request.body.cellphone,
      cep:            request.body.cep,
      name:           request.body.name,
      numberAddress:  request.body.numberAddress,
      password:       request.body.password,
      userName:       request.body.userName,
      whatsApp:       request.body.whatsApp,
    }
    const usersRepository = new UsersRepository();

    const userNameAlredyExist = await usersRepository.findByUserName(data.userName);

    if(userNameAlredyExist)
    {
      throw new AppError("User Already Exists.");
    }

    const passwordHash = await hash(data.password, 8);
    
    data.password = passwordHash;

    const resp = await usersRepository.create(data)

    return response.status(200).json(resp);
  }
}

export { CreateUserUseCase };
