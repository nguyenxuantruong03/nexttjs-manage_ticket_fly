import { Currency } from "../../../common/enums";
import { CarRentalExtraType } from "../enums";

export interface CarRentalBookingExtra {
  id: string;

  bookingId: string;

  extraId?: string;

  name: string;

  type: CarRentalExtraType;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  currency: Currency;

  createdAt: string;
}
