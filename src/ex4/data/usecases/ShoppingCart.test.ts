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
  test('Should return 0 for the total if no product is in cart', () => {
    const { sut } = makeSut();

    expect(sut.items.length).toBe(0);
    expect(sut.total()).toBe(0)
  });

  test('Should have 1 product after adding 1 product to cart and the total is correct', () => {
    const { sut } = makeSut();

    const product = new Product("Caneta", 5.33);

    const result = sut.add(product, 1);

    expect(result).toBe(true);
    expect(sut.items.length).toBe(1);
    expect(sut.items[0].qtd).toBe(1);
    expect(sut.items[0].product).toEqual(product);
    expect(sut.total()).toBe(5.33);
  });

  test('Should have 1 product after adding 5 of the same product to cart and the total is correct', () => {
    const { sut } = makeSut();

    const products = [
      new Product("Caneta", 5.33),
      new Product("Caneta", 5.33),
      new Product("Caneta", 5.33),
      new Product("Caneta", 5.33),
      new Product("Caneta", 5.33),
    ];

    const result = products.map(product => sut.add(product, 1)).every(value => value);

    expect(result).toBe(true);
    expect(sut.items.length).toBe(1);
    expect(sut.items[0].qtd).toBe(5);
    expect(sut.items[0].product).toEqual(products[0]);
    expect(sut.total()).toBe(products.length * 5.33);
  });

  test('Should have 1 product after adding 2 items of 1 product and the total is correct', () => {
    const { sut } = makeSut();

    const product = new Product("Caneta", 5.33);
    const qtdAdded = 2;

    const result = sut.add(product, qtdAdded);

    expect(result).toBe(true);
    expect(sut.items.length).toBe(1);
    expect(sut.items[0].qtd).toBe(qtdAdded);
    expect(sut.items[0].product).toEqual(product);
    expect(sut.total()).toBe(qtdAdded * 5.33);
  });

  test('Should have 1 product after adding 2 items of 1 product and the total is correct', () => {
    const { sut } = makeSut();

    const product = new Product("Caneta", 5.33);
    const qtdAdded = 2;

    sut.add(product, qtdAdded);

    const result = sut.empty();

    expect(result).toBe(true);
    expect(sut.items.length).toBe(0);
    expect(sut.total()).toBe(0);
  });

  test('Should return false if the product was not found in the cart', () => {
    const { sut } = makeSut();

    const result = sut.remove("Caneta");

    expect(result).toBe(false);
  });

  test('Should have 0 products after adding 1 item of 1 product and removing it', () => {
    const { sut } = makeSut();

    const product = new Product("Caneta", 5.33);
    const qtdAdded = 1;

    sut.add(product, qtdAdded);

    const result = sut.remove("Caneta");

    expect(result).toBe(true);
    expect(sut.items.length).toBe(0);
    expect(sut.total()).toBe(0);
  });
});