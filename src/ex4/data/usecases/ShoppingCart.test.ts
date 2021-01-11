import { Product } from "./Product";
import { ShoppingCart } from "./ShoppingCart";

type SutType = {
  sut: ShoppingCart,
}

const makeSut = (): SutType => {
  const sut = new ShoppingCart();

  return {
    sut
  }
}

describe('Shopping cart', () => {
  test('Should have 1 product after adding 1 product to cart', () => {
    const { sut } = makeSut();

    const product = new Product("Caneta", 5.33);

    const result = sut.add(product, 1);

    expect(result).toBe(true);
    expect(sut.items.length).toBe(1);
    expect(sut.items[0].qtd).toBe(1);
    expect(sut.items[0].product).toEqual(product);
  });

  test('Should ', () => {
    const { sut } = makeSut();

    const product = new Product("Caneta", 5.33);

    const result = sut.add(product, 1);
  });
});