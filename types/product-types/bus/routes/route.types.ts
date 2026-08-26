import { Address } from "@/types/location/address";

import { Bus } from "../core/bus.types";
import { BusBoardingPoint } from "./boarding-point.types";
import { BusDropoffPoint } from "./dropoff-point.types";
import { BusTrip } from "./trip.types";
import { RouteType } from "@/types/common/catalog/route-type.type";

export interface BusRoute {
  id: string;

  busId: string;
  bus: Bus;

  routeTypeId: string;
  routeType: RouteType;

  departureAddressId: string;
  departureAddress: Address;

  arrivalAddressId: string;
  arrivalAddress: Address;

  distanceKm: number | null;

  estimatedDuration: number | null;

  boardingPoints: BusBoardingPoint[];

  dropoffPoints: BusDropoffPoint[];

  trips: BusTrip[];

  code: string | null;

  createdAt: string;

  updatedAt: string;
}