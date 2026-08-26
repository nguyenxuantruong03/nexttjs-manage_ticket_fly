import { FlyExtraMapper } from "../fly-extra-mapper.type";
import { FlyBooking } from "./booking.types";

export interface FlyBookingExtra {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  bookingId: string;
  booking: FlyBooking;

  extraId: string | null;
  extra: FlyExtraMapper | null;

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
