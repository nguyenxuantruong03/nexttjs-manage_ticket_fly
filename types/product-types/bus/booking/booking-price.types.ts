import { BusBooking } from "./booking.types";

export interface BusBookingPriceSnapshot {
  id: string;

  bookingId: string;
  booking: BusBooking;

  subtotal: number;

  taxes: number;

  serviceFee: number;

  discount: number;

  total: number;
}