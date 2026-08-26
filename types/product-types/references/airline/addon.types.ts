import { FlyPassenger } from "../../ticket-fly/booking/passenger.types";
import { FlyAirline } from "./airline.types";
import { FlyAddonType } from "./fly-addon-type";

export interface FlyAddon {
  id: string;

  airlineId: string | null;
  airline: FlyAirline | null;

  name: string;

  description: string | null;

  typeId: string;
  type: FlyAddonType;

  provider: string | null;

  image: string | null;

  amount: number;

  active: boolean;

  passengerAddons: FlyPassengerAddon[];

  createdAt: string;

  updatedAt: string;
}

export interface FlyPassengerAddon {
  id: string;

  passengerId: string;
  passenger: FlyPassenger;

  addonId: string;
  addon: FlyAddon;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  metadata: unknown | null;

  createdAt: string;
}
