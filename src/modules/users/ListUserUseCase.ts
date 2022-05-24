import { UsersRepository } from "@src/entity/users/UsersRepository";
import { Response, Request } from "express";


class ListUserUseCase {
  async execute(request:Request, response:Response):Promise<Response>{
    
    const userRespository = new UsersRepository();
    const users = await userRespository.list();

    return response.status(200).json(users);
  }
}

export { ListUserUseCase };
