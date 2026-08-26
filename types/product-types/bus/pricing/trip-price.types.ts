import { BusTrip } from "../routes/trip.types";
import { BusSeatPrice } from "./seat-price.types";

export interface BusTripPrice {
  id: string;

  tripId: string;
  trip: BusTrip;

  seatPrices: BusSeatPrice[];

  createdAt: string;

  updatedAt: string;
}
