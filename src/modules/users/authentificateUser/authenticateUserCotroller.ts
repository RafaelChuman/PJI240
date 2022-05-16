import {Response, Request} from "express";
import { ReturningStatementNotSupportedError } from "typeorm";
import { AuthenticaUserUseCase } from "./authenticateUserUseCase";


class AuthenticateUserController{
    private authenticaUserUseCase: AuthenticaUserUseCase;
    
    constructor(authenticaUserUseCase: AuthenticaUserUseCase){
        this.authenticaUserUseCase = authenticaUserUseCase;
    }

    async handle(request:Request, response:Response):Promise<Response>{

        const {userName, password} = request.body;
       
        const token = await this.authenticaUserUseCase.execute({userName, password})
        
        return response.status(200).json(token);
    }
};

export {AuthenticateUserController};