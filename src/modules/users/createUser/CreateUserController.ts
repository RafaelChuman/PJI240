import { ICreateUserDTO } from "@entity/Users/IUsersRepository";
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}



  async handle(request: Request, response: Response): Promise<Response> {
    const data:ICreateUserDTO = {
      name:           request.body.name,
      userName:       request.body.userName,
      password:       request.body.password,
      cep:            request.body.cep,
      numberAddress:  request.body.numberAddress,
      cellphone:      request.body.cellphone,
      whatsApp:       request.body.whatsApp,
    };
    
    const user = await this.createUserUseCase.execute(data);

    return response.status(201).json(user);
  }
}

export { CreateUserController };
