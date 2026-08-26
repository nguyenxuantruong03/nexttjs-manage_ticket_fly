import { FlyExtraFee } from "./extra-fee.type";
import { FlyFare } from "./fare.types";

export interface FlyFarePriceBreakdown {
  id: string;

  // ======================================================
  // RELATION
  // ======================================================

  fareId: string;
  fare: FlyFare;

  // ======================================================
  // FARE
  // ======================================================

  baseFare: number;

  taxes: number;

  airportFee: number;

  fuelSurcharge: number;

  serviceFee: number;

  bookingFee: number;

  // ======================================================
  // EXTRA FEES
  // ======================================================

  extraFees: FlyExtraFee[];

  // ======================================================
  // DISCOUNT
  // ======================================================

  discount: number;

  finalPrice: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: Date;
}
