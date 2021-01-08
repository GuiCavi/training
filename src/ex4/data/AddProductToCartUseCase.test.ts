import { Product } from "../domain/models/Product";
import { AddProductToCartUseCase } from "./AddProductToCartUseCase";

const makeSut = () => {
  return new AddProductToCartUseCase();
}

describe('Add Product to Cart', () => {
  test('Should have one product after adding 1 product to cart', () => {
    const sut = makeSut();

    const product = new Product("Caneta", 5.33);
    const result = sut.addProduct(product);

    expect(result).toBe(true)
  });
});