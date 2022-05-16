import { UsersRepository } from "entity/Users/UsersRepository";
import { AppError } from "errors/AppError";
import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    //Bearer dkdfvmdlkfvmkdm
    const authHeader = request.headers.authorization;

    if(!authHeader)
    {
        throw new AppError("Token Missing", 401);
    }

    const[, token] = authHeader.split(" ");

    try{        
        const decoded = verify(token, "brasil123");

        const userName = decoded.sub.toString();

        const userRespository = new UsersRepository();
        
        const user = await userRespository.findByUserName(userName);

        if(!user){
            throw new  AppError("User does not exist.", 401)
        }

        next();
    }catch{
        throw new AppError("Invalid Token", 401);
    }

    

    
} 
    
