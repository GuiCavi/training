import { IProduct } from "../../domain/models/IProduct";
import { IItem, IShoppingCart } from "../../domain/models/IShoppingCart";
import { IUser } from "../../domain/models/IUser";
import { Item } from "./Item";

export class ShoppingCart implements IShoppingCart {
  items: IItem[] = [];
  user: IUser;

  add(product: IProduct, qtd: number): boolean {
    const item = new Item(product, qtd);

    const indexAdded = this.items.findIndex(item => item.product.name === product.name);

    if (indexAdded === -1) {
      const currentLength = this.items.length;
      const newLength = this.items.push(item);

      return newLength === currentLength + 1;
    }

    const currentQtd = this.items[indexAdded].qtd;
    this.items[indexAdded].qtd++;

    const newQtd = this.items[indexAdded].qtd;

    return newQtd === currentQtd + 1;
  }

  empty(): boolean {
    this.items = [];
    return this.items.length === 0;
  }

  remove(name: string, qtd?: number): boolean {
    qtd = qtd || 1;

    const indexRemoved = this.items.findIndex(item => item.product.name === name);

    if (indexRemoved === -1) return false;

    const currentLength = this.items.length;
    this.items.splice(indexRemoved, 1);

    const newLength = this.items.length;

    return newLength === currentLength - 1;
  };

  total(): number {
    return this.items.reduce((prev, curr) => prev + curr.qtd * curr.product.price, 0)
  }
}