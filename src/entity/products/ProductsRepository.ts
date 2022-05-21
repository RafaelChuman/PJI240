
import { PostgresDS } from "@src/data-source";
import { IProductsRepository, ICreateProductDTO } from "./IProductsRepository";
import { Products } from "./Products";

class ProductRepository implements IProductsRepository{

  async create(data: ICreateProductDTO): Promise<Products> {

    const product = new Products();

    
    product.categoriesId =  data.categoriesId;
    product.name =          data.name;
    product.numberStocke =  data.numberStocke;
    product.image =         data.image;
    product.quantityUnit =  data.quantityUnit;
    product.quantityValue=  data.quantityValue;
    product.value =         data.value;
    
    await PostgresDS.manager.save(product);

    return product;
  }

  async list(): Promise<Products[]> {
    const products = await PostgresDS.manager.find(Products);

    return products;
  }
}

export { ProductRepository };
