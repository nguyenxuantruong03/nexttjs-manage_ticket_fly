import { Address } from "../../location/address";
import { Bus } from "../core/bus.types";
import { BusBoardingPoint } from "./boarding-point.types";
import { BusDropoffPoint } from "./dropoff-point.types";
import { BusTrip } from "./trip.types";

export interface BusRoute {
  id: string;

  busId: string;
  bus?: Bus;

  departureAddressId: string;
  departureAddress?: Address;

  arrivalAddressId: string;
  arrivalAddress?: Address;

  distanceKm?: number | null;

  estimatedDuration?: number | null;

  boardingPoints?: BusBoardingPoint[];

  dropoffPoints?: BusDropoffPoint[];

  trips?: BusTrip[];

  code?: string | null;

  createdAt: Date;

  updatedAt: Date;
}
