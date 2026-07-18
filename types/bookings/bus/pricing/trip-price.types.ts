import { BusSeatPrice } from "./seat-price.types";

export interface BusTripPrice {
  id: string;

  tripId: string;

  seatPrices: BusSeatPrice[];

  createdAt: string;

  updatedAt: string;
}