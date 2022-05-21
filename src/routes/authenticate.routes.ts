import { Router } from "express"
import { authenticaUserUseCase }  from "@src/modules/users";

const authenticateRoutes = Router();


authenticateRoutes.get("/", (request, response) => 
    authenticaUserUseCase.execute(request, response)
);

export {authenticateRoutes};