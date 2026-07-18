import { Currency } from "@/types/common/enums";
import { BusPriceBreakdown } from "./breakdown.types";
import { BusPriceRule } from "./rule.types";

export interface BusPrice {
  id: string;

  busId: string;

  currency: Currency;

  fromPrice: number;

  toPrice?: number;

  originalFromPrice?: number;

  originalToPrice?: number;

  breakdowns: BusPriceBreakdown[];

  rules: BusPriceRule[];

  effectiveFrom?: string;

  effectiveTo?: string;

  createdAt: string;

  updatedAt: string;
}