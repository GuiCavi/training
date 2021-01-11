import { IShoppingCart } from "../../../domain/models/IShoppingCart";

export interface IDeliveryTaxService {
  totalWithDeliveryTax: (cart: IShoppingCart) => number;
}