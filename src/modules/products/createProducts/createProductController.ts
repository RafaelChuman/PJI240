import { ICreateProductDTO } from "entity/products/IProductsRepository";
import { Response, Request } from "express";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductsController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data: ICreateProductDTO = {
        category:       request.body.category,
        name:           request.body.name,
        numberStocke:   request.body.numberStocke,
        image:          request.body.image,
        quantity:       request.body.quantity,
        value:          request.body.value,
    };

    const product = this.createProductUseCase.execute(data);

    return response.status(201).json(product);
  }
}

export { CreateProductsController };