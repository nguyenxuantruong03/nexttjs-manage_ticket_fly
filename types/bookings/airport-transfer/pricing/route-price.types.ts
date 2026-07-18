import { AirportTransferVehicleType } from "../enums";
import { AirportTransferPriceBreakdown } from "./breakdown.types";

export interface AirportTransferRoutePrice {
  id: string;

  priceId: string;

  routeId: string;

  vehicleType: AirportTransferVehicleType;

  basePrice: number;

  originalPrice?: number;

  breakdown?: AirportTransferPriceBreakdown;
}