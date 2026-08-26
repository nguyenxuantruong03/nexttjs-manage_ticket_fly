import { YachtPrice } from "./price.types";

export interface YachtPriceRule {
  id: string;

  priceId: string;
  price?: YachtPrice;

  percentage?: number | null;

  amount?: number | null;

  startDate?: Date | null;
  endDate?: Date | null;

  active: boolean;
}