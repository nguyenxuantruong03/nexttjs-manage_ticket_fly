import { FlyBooking } from "./booking.types";

export interface FlyBookingContact {
  id: string;

  bookingId: string;

  booking?: FlyBooking;

  fullName: string;

  email: string;

  phone: string;

  countryCode?: string;
}