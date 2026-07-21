import { Address } from "../../location/address";
import { BusTrip } from "./trip.types";

export interface BusRouteStop {
  id: string;

  tripId: string;
  trip?: BusTrip;

  addressId: string;
  address?: Address;

  arrivalTime?: Date | null;

  departureTime?: Date | null;

  stopOrder: number;

  createdAt: Date;
}
