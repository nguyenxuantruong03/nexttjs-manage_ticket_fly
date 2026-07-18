import { Currency } from "@/types/common/enums";
import { FlyPassenger } from "./passenger.types";
import { FlyAirline } from "../airline/airline.types";

export interface FlyInsurance {
  id: string;

  airlineId?: string;

  airline?: FlyAirline;

  provider: string;

  name: string;

  description?: string;

  coverage?: string;

  amount: number;

  currency: Currency;

  active: boolean;

  passengers?: FlyPassengerInsurance[];
}

// ======================================================
// PASSENGER INSURANCE
// ======================================================

export interface FlyPassengerInsurance {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  insuranceId: string;

  insurance?: FlyInsurance;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  currency: Currency;

  createdAt: Date;
}