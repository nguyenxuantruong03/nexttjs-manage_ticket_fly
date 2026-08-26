import { FlyBookingStatus } from "../enums";
import { FlyBooking } from "./booking.types";

export interface FlyBookingStatusHistory {
  id: string;

  bookingId: string;
  booking?: FlyBooking;

  fromStatus?: FlyBookingStatus;

  toStatus: FlyBookingStatus;

  note?: string;

  createdAt: Date;
}