import { ProductRepository } from "@entity/products/ProductsRepository";
import { ListProductController } from "./listProductsController";
import { ListProductUseCase } from "./listProductUseCase";


export default(): ListProductController => {

    const productRepository = new ProductRepository();
    const listProductUseCase = new ListProductUseCase(productRepository);
    const listProductController = new ListProductController(listProductUseCase);

    return listProductController;
}

