import { AirportTransferBooking } from "./booking.types";

export interface AirportTransferBookingFlight {
  id: string;

  bookingId: string;

  booking: AirportTransferBooking;

  airline: string | null;

  flightNumber: string | null;

  terminal: string | null;

  expectedArrival: string | null;

  actualArrival: string | null;
}