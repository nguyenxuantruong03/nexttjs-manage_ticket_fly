import { Currency } from "@/types/common/enums";
import { FlyFare } from "./fare.types";

export interface FlyFareTax {
  id: string;

  fareId: string;

  fare?: FlyFare;

  name: string;

  amount: number;

  currency: Currency;

  createdAt: Date;
}