import { IProduct } from "../../domain/models/IProduct";
import { IItem, IShoppingCart } from "../../domain/models/IShoppingCart";
import { IUser } from "../../domain/models/IUser";
import { Item } from "./Item";

export class ShoppingCart implements IShoppingCart {
  items: IItem[] = [];
  user: IUser;

  add(product: IProduct, qtd: number): boolean {
    const item = new Item(product, qtd);

    const currentLength = this.items.length;
    const newLength = this.items.push(item);

    return newLength === currentLength + 1;
  }

  total(): number {
    return 0
  }
}