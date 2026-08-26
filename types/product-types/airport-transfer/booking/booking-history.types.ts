import { AirportTransferBooking } from "./booking.types";
import { AirportTransferBookingStatus } from "../enums";

export interface AirportTransferBookingStatusHistory {
  id: string;

  bookingId: string;

  booking: AirportTransferBooking;

  fromStatus: AirportTransferBookingStatus | null;

  toStatus: AirportTransferBookingStatus;

  note: string | null;

  createdAt: string;
}