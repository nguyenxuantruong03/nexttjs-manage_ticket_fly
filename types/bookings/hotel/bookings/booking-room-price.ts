import { Currency } from "@/types/common/enums";

export interface HotelBookingRoomPrice {
  id: string;

  bookingRoomId: string;

  originalPrice: number;

  nightlyPrice: number;

  nights: number;

  subtotal: number;

  tax: number;

  serviceFee: number;

  discount: number;

  total: number;

  currency: Currency;
}
