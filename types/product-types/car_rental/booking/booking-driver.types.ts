import { CarRentalBooking } from "./booking.types";

export interface CarRentalBookingDriver {
  id: string;

  bookingId: string;

  booking: CarRentalBooking;

  name: string;

  phone: string | null;

  licenseNumber: string | null;

  nationality: string | null;

  experienceYears: number | null;

  note: string | null;

  createdAt: string;
}