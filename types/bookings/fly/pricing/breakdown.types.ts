import { FlyFare } from "./fare.types";

export interface FlyFarePriceBreakdown {
  id: string;

  fareId: string;

  fare?: FlyFare;

  baseFare: number;

  taxes: number;

  airportFee: number;

  fuelSurcharge: number;

  serviceFee: number;

  bookingFee: number;

  discount: number;

  finalPrice: number;

  createdAt: Date;
}
