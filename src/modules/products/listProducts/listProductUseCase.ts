import { Products } from "entity/products/Products";
import { ProductRepository } from "entity/products/ProductsRepository";



class ListProductUseCase{
    
    private productsRepository: ProductRepository;

    constructor(productsRepository: ProductRepository)
    {
        this.productsRepository = productsRepository;
    }

    async execute():Promise<Products[]>{

        return this.productsRepository.list();
    }

}

export {ListProductUseCase}