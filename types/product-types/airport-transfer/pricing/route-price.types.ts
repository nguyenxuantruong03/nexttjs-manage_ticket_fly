import { AirportTransferPrice } from "./price.types";
import { AirportTransferRoute } from "../routes/route.types";
import { AirportTransferPriceBreakdown } from "./breakdown.types";
import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

export interface AirportTransferRoutePrice {
  id: string;

  priceId: string;
  price: AirportTransferPrice;

  routeId: string;
  route: AirportTransferRoute;

  vehicleTypeId: string;
  vehicleType: VehicleType;

  basePrice: number;

  originalPrice: number | null;

  breakdown: AirportTransferPriceBreakdown | null;
}
