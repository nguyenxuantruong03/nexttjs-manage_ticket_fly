import { CarRentalBookingStatus } from "../enums";

export interface CarRentalBookingStatusHistory {
  id: string;

  bookingId: string;

  fromStatus?: CarRentalBookingStatus;

  toStatus: CarRentalBookingStatus;

  note?: string;

  createdAt: string;
}