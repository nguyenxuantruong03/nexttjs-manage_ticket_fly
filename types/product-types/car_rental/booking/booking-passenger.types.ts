import { CarRentalBooking } from "./booking.types";

export interface CarRentalBookingPassenger {
  id: string;

  bookingId: string;
  booking: CarRentalBooking;

  firstName: string;

  lastName: string | null;

  email: string | null;

  phone: string | null;

  createdAt: string;
}