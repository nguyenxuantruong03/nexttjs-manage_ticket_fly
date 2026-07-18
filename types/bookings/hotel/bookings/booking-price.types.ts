import { Currency } from "@/types/common/enums";

export interface HotelBookingPriceSnapshot {
  id: string;

  bookingId: string;

  roomAmount: number;

  currencyRate: number;

  taxAmount: number;

  serviceFee: number;

  discount: number;

  totalAmount: number;

  depositAmount: number;

  payableNow: number;

  payableLater: number;

  currency: Currency;

  createdAt: Date;
}