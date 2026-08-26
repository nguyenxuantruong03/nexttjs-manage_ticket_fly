import { AirportTransferBooking } from "./booking.types";

export interface AirportTransferBookingContact {
  id: string;

  bookingId: string;

  booking: AirportTransferBooking;

  fullName: string;

  phone: string;

  email: string;

  emergencyPhone: string | null;
}