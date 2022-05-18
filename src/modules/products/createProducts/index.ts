import { ProductRepository } from "@entity/products/ProductsRepository";
import { CreateProductUseCase } from "./createProductUseCase";
import { CreateProductsController } from "./createProductController";


export default(): CreateProductsController => {

    const productRepository = new ProductRepository();
    const createproductUseCase = new CreateProductUseCase(productRepository);
    const createproducts = new CreateProductsController(createproductUseCase);

    return createproducts;
}