import { Address } from "../../location/address";
import { BusRoute } from "./route.types";

export interface BusDropoffPoint {
  id: string;

  routeId: string;
  route?: BusRoute;

  addressId: string;
  address?: Address;

  name?: string | null;

  arrivalTime?: string | null;

  order: number;

  createdAt: Date;
}
