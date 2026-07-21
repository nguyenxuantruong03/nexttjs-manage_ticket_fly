import { z } from "zod";

import { AirportTransferRoutePriceSchema } from "./route-price.schema";

import { AirportTransferTripPriceSchema } from "./trip-price.schema";

import { AirportTransferPriceRuleSchema } from "./price-rule.schema";

export const AirportTransferPriceSchema = z.object({
  fromPrice: z.number(),

  toPrice: z.number().optional(),

  originalFromPrice: z.number().optional(),

  originalToPrice: z.number().optional(),

  routePrices: z.array(AirportTransferRoutePriceSchema),

  tripPrices: z.array(AirportTransferTripPriceSchema),

  rules: z.array(AirportTransferPriceRuleSchema),
});
