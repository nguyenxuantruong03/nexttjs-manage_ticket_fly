import { AirportTransferExtraFee } from "./extra-fee.types";
import { AirportTransferRoutePrice } from "./route-price.types";

export interface AirportTransferPriceBreakdown {
  id: string;

  routePriceId: string;
  routePrice: AirportTransferRoutePrice;

  baseFare: number;

  airportFee: number;

  parkingFee: number;

  tollFee: number;

  serviceFee: number;

  taxes: number;

  discount: number;

  totalPrice: number;

  includedItems: string[];

  extraFees: AirportTransferExtraFee[];
}
