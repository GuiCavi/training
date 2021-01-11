import { Product } from "../../data/usecases/Product";
import { IExternalTaxService } from "../../data/usecases/services/IExternaTaxService";
import { User } from "../../data/usecases/User";
import { IProduct } from "../../domain/models/IProduct";
import { IItem, IShoppingCart } from "../../domain/models/IShoppingCart";
import { IUser } from "../../domain/models/IUser";
import { DeliveryTaxService } from "./DeliveryTaxService";

class CorreiosServiceSpy implements IExternalTaxService {
  callsCount: number = 0;
  zip: string;
  tax: number = 0;

  calculate(zip: string): number {
    this.callsCount++;
    this.zip = zip;
    return this.tax;
  }
}

class ShoppingCartMock implements IShoppingCart {
  items: IItem[];
  user: IUser;

  product: IProduct;
  qtd: number;

  constructor() {
    this.user = new User("User 1", "123456");
  }

  empty: () => true;
  remove: (name: string, qtd: number) => true;

  add(product: IProduct, qtd: number): boolean {
    this.product = product;
    this.qtd = qtd;

    return true;
  }

  total(): number {
    return this.product.price * this.qtd;
  }
}

type SutType = {
  correiosServiceSpy: CorreiosServiceSpy,
  shoppingCartMock: ShoppingCartMock,
  sut: DeliveryTaxService,
}

const makeSut = (): SutType => {
  const shoppingCartMock = new ShoppingCartMock();
  const correiosServiceSpy = new CorreiosServiceSpy();

  const sut = new DeliveryTaxService(correiosServiceSpy);

  return {
    correiosServiceSpy,
    shoppingCartMock,
    sut
  }
}

describe('Delivery Tax Service', () => {
  test("Should return the total value WITH the delivery tax if the total value is < 100", () => {
    const { sut, shoppingCartMock, correiosServiceSpy } = makeSut();

    correiosServiceSpy.tax = 50;

    const price = 5;
    const product = new Product("Caneta", price);
    const qtdAdded = 5;

    shoppingCartMock.add(product, qtdAdded);

    const result = sut.totalWithDeliveryTax(shoppingCartMock);

    expect(result).toBe(correiosServiceSpy.tax + price * qtdAdded);
    expect(correiosServiceSpy.callsCount).toBe(1);
    expect(correiosServiceSpy.zip).toBe(shoppingCartMock.user.zip);
  });

  test("Should return the total value WITHOUT the delivery tax if the total value is >= 100", () => {
    const { sut, correiosServiceSpy, shoppingCartMock } = makeSut();

    const price = 150;
    const product = new Product("Mesa", price);
    const qtdAdded = 1;

    shoppingCartMock.add(product, qtdAdded);

    const result = sut.totalWithDeliveryTax(shoppingCartMock);

    expect(result).toBe(correiosServiceSpy.tax + price * qtdAdded);
    expect(correiosServiceSpy.callsCount).toBe(0);
  });
});