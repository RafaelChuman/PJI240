import { UsersRepository } from "../../../entity/Users/UsersRepository";
import { AuthenticateUserController } from "./authenticateUserCotroller";
import { AuthenticaUserUseCase } from "./authenticateUserUseCase";

export default():AuthenticateUserController =>{

    const userRespository = new UsersRepository();
    const authenticateUserUseCase = new AuthenticaUserUseCase(userRespository);
    const authenticateUserCotroller = new AuthenticateUserController(authenticateUserUseCase);
    
    return authenticateUserCotroller;
}