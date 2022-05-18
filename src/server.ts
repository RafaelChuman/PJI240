import { AppError } from "@errors/AppError";
import express, { NextFunction, Request, Response} from "express";
import "express-async-errors";
import { app } from ".";
import { PostgresDataSource, initializeAppDataSource } from "@src/data-source";


app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({message: err.message})
    }

    return response.status(500).json({
        status:"Error",
        message: `Internal Server Errorr - ${err.message}`
    })
})

app.listen(3333, () => console.log("Server is running!"));



