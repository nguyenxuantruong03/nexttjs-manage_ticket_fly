import { YachtFeeType } from "../enums";

export interface YachtPriceFee {
  id: string;

  priceId: string;

  type: YachtFeeType;

  amount: number;

  mandatory: boolean;

  description?: string | null;
}