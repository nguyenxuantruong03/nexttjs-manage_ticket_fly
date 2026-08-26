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

  breakdowns: BusPriceBreakdown[];

  rules: BusPriceRule[];

  effectiveFrom: string | null;

  effectiveTo: string | null;

  createdAt: string;

  updatedAt: string;
}
