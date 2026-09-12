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

  effectiveFrom?: Date;
  effectiveTo?: Date;

  routePrices: AirportTransferRoutePrice[];
  tripPrices: AirportTransferTripPrice[];

  priceRules: AirportTransferPriceRule[];

  createdAt: string;
  updatedAt: string;
}
