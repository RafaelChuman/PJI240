import { ensureAuthenticated } from "@src/midlewares/ensureAuthenticated";
import { createUserUseCase, listUserUseCase } from "@src/modules/users";
import { response, request, Router } from "express";


const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserUseCase.execute(request, response)
);

usersRoutes.get("/", ensureAuthenticated, (request, response) =>
  listUserUseCase.execute(request, response)
);



export { usersRoutes };
