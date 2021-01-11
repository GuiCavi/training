import { IDeliveryTaxService } from "../../data/usecases/services/IDeliveryTaxService";
import { IExternalTaxService } from "../../data/usecases/services/IExternaTaxService";
import { IShoppingCart } from "../../domain/models/IShoppingCart";

export class DeliveryTaxService implements IDeliveryTaxService {
  constructor(private readonly externalTaxService: IExternalTaxService) { }

  totalWithDeliveryTax(cart: IShoppingCart): number {
    let deliveryTax = cart.total() < 100 ? this.externalTaxService.calculate(cart.user.zip) : 0;

    return cart.total() + deliveryTax;
  }
}