import { IProduct } from "../../domain/models/IProduct";
import { IItem } from "../../domain/models/IShoppingCart";

export class Item implements IItem {
  constructor(readonly product: IProduct, readonly qtd: number) { }
}