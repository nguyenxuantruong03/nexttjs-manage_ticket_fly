import { AirportTransferBookingStatus } from "../enums";

export interface AirportTransferBookingStatusHistory {
  id: string;

  bookingId: string;

  fromStatus?: AirportTransferBookingStatus;

  toStatus: AirportTransferBookingStatus;

  note?: string;

  createdAt: string;
}