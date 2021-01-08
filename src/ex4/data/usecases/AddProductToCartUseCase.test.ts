import { IProduct } from "../../domain/models/IProduct";
import { Product } from "../../domain/models/Product";
import { AddProductToCartUseCase } from "./AddProductToCartUseCase";

class ProductRepositorySpy {
  product: IProduct;
  qtd: number;

  save(product: IProduct, qtd: any): boolean {
    this.product = product;
    this.qtd = qtd;

    return true;
  }
}

type SutType = {
  sut: AddProductToCartUseCase,
  productRepositorySpy: ProductRepositorySpy
}

const makeSut = (): SutType => {
  const productRepositorySpy = new ProductRepositorySpy();
  const sut = new AddProductToCartUseCase(productRepositorySpy);

  return {
    productRepositorySpy,
    sut
  }
}

describe('Add Product to Cart', () => {
  test('Should have one product after adding 1 product to cart', () => {
    const { sut, productRepositorySpy } = makeSut();

    const product = new Product("Caneta", 5.33);
    const result = sut.add(product, 1);

    expect(result).toBe(true)
    expect(productRepositorySpy.product).toEqual(product);
    expect(productRepositorySpy.qtd).toBe(1);
  });
});