import { BusBookingSeat } from "../booking/booking-seat.types";
import { BusSeatType } from "../enums";
import { BusSeatAvailability } from "../routes/seat-availability.types";

export interface BusSeat {
  id: string;

  vehicleId: string;

  seatNumber: string;

  type: BusSeatType;

  floor?: number;

  row?: number;

  column?: number;

  availability: BusSeatAvailability[];

  bookingSeat: BusBookingSeat[];

  createdAt: string;
}