import { YachtExtraFee } from "./extra-fee.type";
import { YachtPrice } from "./price.types";

export interface YachtPriceBreakdown {
  id: string;

  priceId: string;
  price: YachtPrice;

  basePrice: number;
  originalPrice?: number | null;

  taxes: number;
  serviceFee: number;
  bookingFee: number;
  discount: number;

  finalPrice: number;

  includedItems: string[];

  extraFees: YachtExtraFee[];

  createdAt: Date;
  updatedAt: Date;
}
