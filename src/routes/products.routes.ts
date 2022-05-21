import { Router } from "express";
import { ensureAuthenticated } from "@midlewares/ensureAuthenticated";
import multer from "multer";
import {uploadFile} from "@config/fileManager";
import { createProductUseCase, listProductUseCase } from "@src/modules/products";


const productsRoutes = Router();

const uploadPhoto = multer(uploadFile("./tmp/Products"))


productsRoutes.post("/", ensureAuthenticated, (request, response) =>
  createProductUseCase.execute(request, response)
);

productsRoutes.get("/", (request, response) =>
  listProductUseCase.execute(request, response)
);

// productsRoutes.patch("/", uploadPhoto.single("Products"), ensureAuthenticated,
//   (request, response) =>
//   uploadProductsController().handle(request, response));

export { productsRoutes };
