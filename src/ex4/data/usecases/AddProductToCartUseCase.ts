import { IProduct } from "../../domain/models/IProduct";
import { Product } from "../../domain/models/Product";
import { IAddToCart } from "../../domain/usecases/IAddToCart";

export class AddProductToCartUseCase implements IAddToCart<IProduct> {
  add(item: IProduct, qtd: number) {
    return true;
  }
}