import { BusPriceBreakdown } from "./breakdown.types";
import { BusPriceRule } from "./rule.types";
import { Bus } from "../core/bus.types";

export interface BusPrice {
  id: string;

  busId: string;
  bus: Bus;

  fromPrice: number;

  toPrice: number | null;

  originalFromPrice: number | null;

  originalToPrice: number | null;

  breakdown: BusPriceBreakdown;

  priceRules: BusPriceRule[];

  effectiveFrom?: Date ;
  effectiveTo?: Date ;

  createdAt: string;

  updatedAt: string;
}
