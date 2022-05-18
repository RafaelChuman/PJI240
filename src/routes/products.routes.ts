import { Router } from "express";
import listProductsController from "@modules/products/listProducts";
import createProductsController from "@modules/products/createProducts";
import { ensureAuthenticated } from "@midlewares/ensureAuthenticated";
import multer from "multer";
import {uploadFile} from "@config/fileManager";


const productsRoutes = Router();

const uploadPhoto = multer(uploadFile("./tmp/Products"))

productsRoutes.use(ensureAuthenticated);

productsRoutes.post("/", (request, response) =>
  createProductsController().handle(request, response)
);

productsRoutes.get("/", (request, response) =>
  listProductsController().handle(request, response)
);

// productsRoutes.patch("/", uploadPhoto.single("Products"), ensureAuthenticated,
//   (request, response) =>
//   uploadProductsController().handle(request, response));

export { productsRoutes };
