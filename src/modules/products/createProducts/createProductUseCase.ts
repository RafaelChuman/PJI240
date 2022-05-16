
import { IProductsRepository, ICreateProductDTO } from "entity/products/IProductsRepository";
import { Products } from "entity/products/Products";



class CreateProductUseCase {
  constructor(private productRepository: IProductsRepository) {}

  async execute(data: ICreateProductDTO): Promise<Products> {


    return await this.productRepository.create(data);
  }
}

export { CreateProductUseCase };
