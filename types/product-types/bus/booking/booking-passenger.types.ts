import { Gender } from "@/types/common/enums";
import { PassengerDocumentType } from "../enums";
import { BusBooking } from "./booking.types";

export interface BusBookingPassenger {
  id: string;

  bookingId: string;
  booking: BusBooking;

  nationality: string | null;

  firstName: string;

  lastName: string;

  phone: string;

  email: string;

  documentType: PassengerDocumentType;

  documentNumber: string;

  dateOfBirth: string | null;

  gender: Gender | null;
}