import { IProduct } from "../domain/models/IProduct";
import { Product } from "../domain/models/Product";

export class AddProductToCartUseCase {
  addProduct(product: IProduct): boolean {
    return true;
  }
}