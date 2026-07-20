import { CarRentalInsuranceType } from "../enums";

export interface CarRentalBookingInsurance {
  id: string;

  bookingId: string;

  insuranceId?: string;

  // Snapshot
  name: string;

  type: CarRentalInsuranceType;

  price: number;


  quantity: number;

  totalPrice: number;

  createdAt: string;
}