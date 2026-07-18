import { Gender } from "@/types/common/enums";
import { YachtPassengerType } from "../enums";

export interface YachtBookingPassenger {
  id: string;

  bookingId: string;

  fullName: string;

  nationality?: string | null;

  passportNumber?: string | null;

  dateOfBirth?: Date | null;

  gender: Gender;

  email: string;

  phone: string;

  expiresAt: string;

  identityNumber: string;

  type: YachtPassengerType;
}