import { IProduct } from "./IProduct";

export class Product implements IProduct {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}