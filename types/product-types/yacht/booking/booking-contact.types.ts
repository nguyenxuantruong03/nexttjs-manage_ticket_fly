import { YachtBooking } from "./booking.types";

export interface YachtBookingContact {
  id: string;

  bookingId: string;
  booking: YachtBooking;

  fullName: string;
  email: string | null;
  phone: string;
  note: string | null;
}