import { Gender } from "@/types/common/enums";
import { YachtPassengerType } from "../enums";
import { YachtBooking } from "./booking.types";

export interface YachtBookingPassenger {
  id: string;

  bookingId: string;
  booking: YachtBooking;

  fullName: string;

  nationality: string | null;
  passportNumber: string | null;
  dateOfBirth: Date | null;

  gender: Gender;

  email: string;
  phone: string;
  expiresAt: string;
  identityNumber: string;
  type: YachtPassengerType;
}