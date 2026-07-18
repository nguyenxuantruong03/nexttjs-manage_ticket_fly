import { Address } from "../../cities/address";
import { BusRoute } from "./route.types";

export interface BusBoardingPoint {
  id: string;

  routeId: string;
  route?: BusRoute;

  addressId: string;
  address?: Address;

  name?: string | null;

  departureTime: string;

  order: number;

  createdAt: Date;
}