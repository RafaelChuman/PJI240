import { Router } from "express"
import authenticateUserController  from "@modules/users/authentificateUser";

const authenticateRoutes = Router();


authenticateRoutes.get("/", (request, response) => 
    authenticateUserController().handle(request, response)
);

export {authenticateRoutes};