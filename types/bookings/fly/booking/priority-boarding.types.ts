import { Currency } from "@/types/common/enums";
import { FlyPassenger } from "./passenger.types";

export interface FlyPriorityBoarding {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  enabled: boolean;

  amount?: number;

  currency?: Currency;
}