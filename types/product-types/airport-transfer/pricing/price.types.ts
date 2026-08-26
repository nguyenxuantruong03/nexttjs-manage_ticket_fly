import { AirportTransferRoutePrice } from "./route-price.types";
import { AirportTransferTripPrice } from "./trip-price.types";
import { AirportTransferPriceRule } from "./price-rule.types";
import { AirportTransfer } from "../core/airport-transfer.types";

export interface AirportTransferPrice {
  id: string;

  transferId: string;
  transfer: AirportTransfer;

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
