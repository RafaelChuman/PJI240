import { Products } from "entity/products/Products";
import { Response, Request } from "express";
import { ListProductUseCase } from "./listProductUseCase";

class ListProductController{

    private listProductuseCase: ListProductUseCase;

    constructor(listProductuseCase: ListProductUseCase){
        this.listProductuseCase = listProductuseCase;
    }

    async handle(request: Request, response: Response): Promise<Response>{

        const data: Promise<Products[]> = this.listProductuseCase.execute();

        return response.status(201).json(data);
    }
}

export {ListProductController}