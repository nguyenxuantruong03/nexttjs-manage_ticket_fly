import { Currency } from "@/types/common/enums";
import { BusSeatAvailabilityStatus } from "../enums";
import { BusSeat } from "../vehicle/seat.types";
import { BusTrip } from "./trip.types";

export interface BusSeatAvailability {
  id: string;

  tripId: string;
  trip?: BusTrip;

  seatId: string;
  seat?: BusSeat;

  status: BusSeatAvailabilityStatus;

  availableSeats: number;

  soldSeats: number;

  reservedSeats: number;

  totalSeats: number;

  currentPrice: number;

  currency: Currency;

  createdAt: Date;

  updatedAt: Date;
}