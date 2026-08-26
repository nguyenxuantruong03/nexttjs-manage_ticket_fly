import { FlyFare } from "./fare.types";

export interface FlyFareBaggage {
  id: string;

  fareId: string;
  fare?: FlyFare;

  cabinWeightKg?: number;
  checkedWeightKg?: number;

  extraBaggageAllowed: boolean;
  extraBaggagePrice?: number;

  createdAt: Date;
}
