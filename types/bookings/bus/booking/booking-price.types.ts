import { Currency } from "@/types/common/enums";

export interface BusBookingPriceSnapshot {
  id: string;

  bookingId: string;

  subtotal: number;

  taxes: number;

  serviceFee: number;

  discount: number;

  total: number;

  currency: Currency;
}
