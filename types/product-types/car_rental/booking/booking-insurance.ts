import { CarRentalBooking } from "./booking.types";
import { CarRentalInsurance } from "../insurance/insurance.types";

export interface CarRentalBookingInsurance {
  id: string;

  bookingId: string;
  booking: CarRentalBooking;

  insuranceId: string | null;
  insurance: CarRentalInsurance | null;

  // =========================
  // SNAPSHOT
  // =========================

  name: string;

  // Snapshot text, không FK cứng vào InsuranceType
  typeName: string | null;

  price: number;

  quantity: number;

  totalPrice: number;

  createdAt: string;
}