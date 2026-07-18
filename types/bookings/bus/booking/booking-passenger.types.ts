import { Gender } from "@/types/common/enums";
import { PassengerDocumentType } from "../enums";

export interface BusBookingPassenger {
  id: string;

  bookingId: string;

  nationality?: string;

  firstName: string;

  lastName: string;

  phone: string;

  email: string;

  documentType: PassengerDocumentType;

  documentNumber: string;

  dateOfBirth?: string;

  gender?: Gender;
}