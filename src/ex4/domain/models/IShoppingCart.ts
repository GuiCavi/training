import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface IShoppingCart {
  products: IProductQtd[];
  user: IUser;
}

export interface IProductQtd {
  product: IProduct;
  qtd: number;
}