import { HotelExtraMapper } from "../hotel-extra-mapper.type";
import { HotelBooking } from "./booking";

export interface HotelBookingExtra {
  id: string;

  // ======================================================
  // BOOKING
  // ======================================================

  bookingId: string;
  booking: HotelBooking;

  // ======================================================
  // EXTRA
  // ======================================================

  extraId: string | null;
  extra: HotelExtraMapper | null;

  // ======================================================
  // SNAPSHOT
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
