import { Currency } from "../../../common/enums";

export interface CarRentalBookingPrice {
  id: string;

  bookingId: string;

  rentalPrice: number;

  deliveryFee: number;

  pickupFee: number;

  insuranceFee: number;

  serviceFee: number;

  tax: number;

  discount: number;

  couponDiscount: number;

  totalPrice: number;

  currency: Currency;

  createdAt: string;
}
