import { Gender } from "@/types/common/enums";

export interface HotelBookingGuest {
  id: string;

  bookingId: string;

  firstName: string;

  lastName: string;

  email?: string | null;

  phone?: string | null;

  nationality?: string | null;

  passportNumber?: string | null;

  passportCountry?: string | null;

  dateOfBirth?: string | null;

  gender: Gender;

  isMainGuest: boolean;

  createdAt: Date;
}
