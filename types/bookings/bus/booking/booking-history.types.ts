import { BusBookingStatus } from "../enums";

export interface BusBookingStatusHistory {
  id: string;

  bookingId: string;

  status: BusBookingStatus;

  note?: string;

  createdAt: string;
}
