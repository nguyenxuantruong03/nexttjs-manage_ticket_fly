import { Currency } from "@/types/common/enums";
import { FlyPassenger } from "../booking/passenger.types";
import { FlyAddonType } from "../enums";
import { FlyAirline } from "./airline.types";



export interface FlyAddon {
  id: string;

  airlineId?: string;

  airline?: FlyAirline;

  name: string;

  description?: string;

  type: FlyAddonType;

  provider?: string;

  image?: string;

  amount: number;

  currency: Currency;

  active: boolean;

  passengerAddons?: FlyPassengerAddon[];

  createdAt: Date;

  updatedAt: Date;
}

export interface FlyPassengerAddon {
  id: string;

  passengerId: string;

  passenger?: FlyPassenger;

  addonId: string;

  addon?: FlyAddon;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  currency: Currency;

  metadata?: unknown;

  createdAt: Date;
}