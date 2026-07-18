import { Address } from "../../cities/address";
import { AirportTransferRoute } from "./route.types";

export interface AirportTransferRouteStop {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  routeId: string;

  route?: AirportTransferRoute;

  addressId: string;

  address?: Address;

  // ======================================================
  // STOP INFO
  // ======================================================

  stopOrder: number;

  estimatedArrival?: number;

  waitingMinutes?: number;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;
}