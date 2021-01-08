import { IProduct } from "../../domain/models/IProduct";
import { IAddToCart } from "../../domain/usecases/IAddToCart";

export class AddProductToCartUseCase implements IAddToCart<IProduct> {
  constructor(private readonly productRepository) { }

  add(item: IProduct, qtd: number) {
    return this.productRepository.save(item, qtd);
  }
}