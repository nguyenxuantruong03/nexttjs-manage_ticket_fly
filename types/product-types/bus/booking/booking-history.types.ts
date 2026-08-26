import { BusBooking } from "./booking.types";
import { BusBookingStatus } from "../enums";

export interface BusBookingStatusHistory {
  id: string;

  bookingId: string;
  booking: BusBooking;

  status: BusBookingStatus;

  note: string | null;

  createdAt: string;
}