import { YachtExtraMapper } from "../yacht-extra-mapper.type";
import { YachtBooking } from "./booking.types";

export interface YachtBookingExtra {
  id: string;

  // ======================================================
  // BOOKING
  // ======================================================

  bookingId: string;
  booking: YachtBooking;

  // ======================================================
  // EXTRA
  // ======================================================

  extraId: string | null;
  extra: YachtExtraMapper | null;

  // ======================================================
  // QUANTITY / PRICE
  // ======================================================

  quantity: number;

  price: number;

  total: number;
}