import { UsersRepository } from "@src/entity/Users/UsersRepository";
import { Response, Request } from "express";


class ListUserUseCase {
  async execute(request:Request, response:Response):Promise<Response>{
    
    const userRespository = new UsersRepository();
    const userName = request.body?.userName;
    
    if(userName){
      const user = await userRespository.findByUserName(userName);

      return response.status(200).json(user);
    }

    const users = await userRespository.list();

    return response.status(200).json(users);
  }
}

export { ListUserUseCase };
