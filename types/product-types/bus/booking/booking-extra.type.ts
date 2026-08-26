import { BusExtraMapper } from "../bus-extra-mapper.type";
import { BusBooking } from "./booking.types";

export interface BusBookingExtra {
  id: string;

  // ======================================================
  // BOOKING
  // ======================================================

  bookingId: string;
  booking: BusBooking;

  // ======================================================
  // EXTRA
  // ======================================================

  extraId: string | null;
  extra: BusExtraMapper | null;

  // ======================================================
  // PRICE
  // ======================================================

  name: string;

  quantity: number;

  price: number;

  total: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
