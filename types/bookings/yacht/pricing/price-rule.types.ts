import { YachtDiscountType } from "../enums";


export interface YachtPriceRule {
  id: string;

  priceId: string;

  type: YachtDiscountType;

  percentage?: number | null;

  amount?: number | null;

  startDate?: Date | null;

  endDate?: Date | null;

  active: boolean;
}