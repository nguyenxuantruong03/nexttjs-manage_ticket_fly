import { YachtBooking } from "./booking.types";
import { YachtBookingStatus } from "../enums";

export interface YachtBookingStatusHistory {
  id: string;

  bookingId: string;
  booking: YachtBooking;

  fromStatus: YachtBookingStatus | null;
  toStatus: YachtBookingStatus;

  note: string | null;

  createdAt: Date;
}