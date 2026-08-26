import { CarRentalBookingStatus } from "../enums";

import { CarRentalBooking } from "./booking.types";

export interface CarRentalBookingStatusHistory {
  id: string;

  bookingId: string;
  booking: CarRentalBooking;

  fromStatus: CarRentalBookingStatus | null;

  toStatus: CarRentalBookingStatus;

  note: string | null;

  createdAt: string;
}