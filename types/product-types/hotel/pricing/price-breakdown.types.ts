import { HotelExtraFee } from "./extra-fee.type";
import { HotelRoomPrice } from "./price.types";

export interface HotelRoomPriceBreakdown {
  id: string;

  priceId: string;
  price: HotelRoomPrice;

  roomRate: number;
  nights: number;

  taxes: number;
  serviceFee: number;
  resortFee: number;
  cleaningFee: number;
  discount: number;

  extraFees: HotelExtraFee[];
  includedItems: string[];
}
