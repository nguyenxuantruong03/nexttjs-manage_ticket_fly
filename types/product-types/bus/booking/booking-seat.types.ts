import { BusSeat } from "../vehicle/seat.types";
import { BusBooking } from "./booking.types";

export interface BusBookingSeat {
  id: string;

  bookingId: string;
  booking: BusBooking;

  seatId: string;
  seat: BusSeat;

  price: number;
}