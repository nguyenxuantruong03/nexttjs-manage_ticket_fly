import { AirportTransferBooking } from "./booking.types";

export interface AirportTransferBookingPassenger {
  id: string;

  bookingId: string;

  booking: AirportTransferBooking;

  firstName: string;

  lastName: string;

  phone: string | null;

  email: string | null;

  adult: boolean;

  luggage: number | null;
}