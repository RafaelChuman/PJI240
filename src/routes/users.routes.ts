import { response, request, Router } from "express";
import createUserController from "@modules/users/createUser";
import listUserController from "@modules/users/listUser";


const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserController().handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listUserController().handle(request, response)
);



export { usersRoutes };
