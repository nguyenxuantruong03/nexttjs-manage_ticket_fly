import { Gender } from "@/types/common/enums";
import { HotelBooking } from "./booking";

export interface HotelBookingGuest {
  id: string;

  bookingId: string;
  booking?: HotelBooking;

  firstName: string;
  lastName: string;

  email?: string;
  phone?: string;
  nationality?: string;

  passportNumber?: string;
  passportCountry?: string;
  dateOfBirth?: string;
  gender: Gender;
  isMainGuest: boolean;

  createdAt: Date;
}