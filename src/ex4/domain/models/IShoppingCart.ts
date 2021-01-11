import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface IShoppingCart {
  items: IItem[];
  user: IUser;

  add: (product: IProduct, qtd: number) => boolean;
  empty: () => boolean;
  remove: (name: string, qtd: number) => boolean;
  total: () => number;
}

export interface IItem {
  product: IProduct;
  qtd: number;
}