import { UsersRepository } from "@entity/Users/UsersRepository";
import { AppError } from "@errors/AppError";
import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    //Bearer dkdfvmdlkfvmkdm
    const token = request.headers.authorization;

    if(!token)
    {
        throw new AppError("Token Missing", 401);
    }

    try{        
        const decoded = verify(token, "brasil123");

        if(!decoded.sub)
        {
            throw new  AppError("User does not exist.", 401)
        }

        const userId = decoded.sub.toString();

        const userRespository = new UsersRepository();
        
        const user = await userRespository.findById(userId);

        if(!user){
            throw new  AppError("User does not exist.", 401)
        }

        next();
    }catch{
        throw new AppError("Invalid Token", 401);
    }

    

    
} 
    
