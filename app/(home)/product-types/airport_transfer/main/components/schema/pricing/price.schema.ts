import { z } from "zod";

import { AirportTransferRoutePriceSchema } from "./route-price.schema";
import { AirportTransferTripPriceSchema } from "./trip-price.schema";
import { AirportTransferPriceRuleSchema } from "./price-rule.schema";

export const AirportTransferPriceSchema = z.object({
  // ======================================================
  // PRICE RANGE
  // ======================================================

  fromPrice: z.number(),

  toPrice: z.number().optional(),

  originalFromPrice: z.number().optional(),

  originalToPrice: z.number().optional(),

  // ======================================================
  // ROUTE PRICES
  // ======================================================

  routePrices: z.array(AirportTransferRoutePriceSchema).default([]),

  // ======================================================
  // TRIP PRICES
  // ======================================================

  tripPrices: z.array(AirportTransferTripPriceSchema).default([]),

  // ======================================================
  // PRICE RULES
  // ======================================================

  rules: z.array(AirportTransferPriceRuleSchema).default([]),
});

export type AirportTransferPriceFormSchema = z.infer<
  typeof AirportTransferPriceSchema
>;
