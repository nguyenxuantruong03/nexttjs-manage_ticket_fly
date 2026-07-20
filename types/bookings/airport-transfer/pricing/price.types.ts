import { AirportTransferRoutePrice } from "./route-price.types";
import { AirportTransferTripPrice } from "./trip-price.types";
import { AirportTransferPriceRule } from "./price-rule.types";

export interface AirportTransferPrice {
  id: string;

  transferId: string;


  fromPrice: number;

  toPrice?: number;

  originalFromPrice?: number;

  originalToPrice?: number;

  routePrices: AirportTransferRoutePrice[];

  tripPrices: AirportTransferTripPrice[];

  rules: AirportTransferPriceRule[];

  createdAt: string;

  updatedAt: string;
}
