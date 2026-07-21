import { Address } from "../../location/address";
import { AirportTransfer } from "../core/airport-transfer.types";
import { AirportTransferRouteType } from "../enums";
import { AirportTransferRoutePrice } from "../pricing/route-price.types";
import { AirportTransferTrip } from "../trip/trip.types";
import { AirportTransferRouteStop } from "./route-stop.types";

export interface AirportTransferRoute {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  transferId: string;

  transfer?: AirportTransfer;

  // ======================================================
  // ROUTE INFO
  // ======================================================

  type: AirportTransferRouteType;

  prices: AirportTransferRoutePrice[];

  // ======================================================
  // ADDRESS
  // ======================================================

  departureAddressId: string;

  departureAddress?: Address;

  arrivalAddressId: string;

  arrivalAddress?: Address;

  // ======================================================
  // DISTANCE
  // ======================================================

  distanceKm?: number;

  estimatedDuration?: number;

  // ======================================================
  // RELATIONS
  // ======================================================

  trips: AirportTransferTrip[];

  stops: AirportTransferRouteStop[];

  // ======================================================
  // STATUS
  // ======================================================

  active: boolean;

  // ======================================================
  // TIMESTAMP
  // ======================================================

  createdAt: string;

  updatedAt: string;
}
