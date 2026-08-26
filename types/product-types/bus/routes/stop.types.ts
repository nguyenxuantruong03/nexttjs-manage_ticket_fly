import { Address } from "@/types/location/address";

import { BusTrip } from "./trip.types";

export interface BusRouteStop {
  id: string;

  tripId: string;

  trip: BusTrip;

  addressId: string;

  address: Address;

  arrivalTime: string | null;

  departureTime: string | null;

  stopOrder: number;

  createdAt: string;
}