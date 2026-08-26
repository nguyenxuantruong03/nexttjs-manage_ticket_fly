import { AirportTransferBooking } from "./booking.types";

export interface AirportTransferBookingTimeline {
  id: string;

  bookingId: string;

  booking: AirportTransferBooking;

  title: string;

  description: string | null;

  eventTime: string;
}