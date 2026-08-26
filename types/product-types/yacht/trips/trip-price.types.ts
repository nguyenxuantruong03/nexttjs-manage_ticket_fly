import { YachtTrip } from "./trip.types";

export interface YachtTripPrice {
  id: string;

  tripId: string;
  trip: YachtTrip;

  amount: number;

  originalAmount?: number | null;

  tax: number;

  serviceFee: number;

  discount: number;

  finalAmount: number;

  createdAt: Date;
}
