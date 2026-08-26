import { RouteType } from "@/types/common/catalog/route-type.type";
import { AirportTransfer } from "../core/airport-transfer.types";
import { AirportTransferRoutePrice } from "../pricing/route-price.types";
import { AirportTransferTrip } from "../trip/trip.types";
import { AirportTransferRouteStop } from "./route-stop.types";
import { Address } from "@/types/location/address";

export interface AirportTransferRoute {
  id: string;

  // ======================================================
  // RELATIONS
  // ======================================================

  transferId: string;
  transfer: AirportTransfer;

  // ======================================================
  // ROUTE INFO
  // ======================================================

  routeTypeId: string;
  routetype: RouteType;

  prices: AirportTransferRoutePrice[];

  // ======================================================
  // ADDRESS
  // ======================================================

  departureAddressId: string;
  departureAddress: Address;

  arrivalAddressId: string;
  arrivalAddress: Address;

  // ======================================================
  // DISTANCE
  // ======================================================

  distanceKm: number | null;
  estimatedDuration: number | null;

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
