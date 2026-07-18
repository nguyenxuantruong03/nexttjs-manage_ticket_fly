import { AirportTransferExtraFee } from "./extra-fee.types";

export interface AirportTransferPriceBreakdown {
  id: string;

  routePriceId: string;

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