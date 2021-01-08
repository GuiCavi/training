import { IProduct } from "../../domain/models/IProduct";
import { Product } from "../../domain/models/Product";
import { AddProductToCartUseCase } from "./AddProductToCartUseCase";

const makeSut = () => {
  class ProductRepositorySpy {
    save(product: any, qtd: any): boolean {
      return true;
    }

  }

  const productRepositorySpy = new ProductRepositorySpy();

  return new AddProductToCartUseCase(productRepositorySpy);
}

describe('Add Product to Cart', () => {
  test('Should have one product after adding 1 product to cart', () => {
    const sut = makeSut();

    const product = new Product("Caneta", 5.33);
    const result = sut.add(product, 1);

    expect(result).toBe(true)
  });
});