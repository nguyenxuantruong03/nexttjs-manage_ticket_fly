import { z } from "zod";

import { AirportTransferExtraFeeSchema } from "./extra-fee.schema";

export const AirportTransferPriceBreakdownSchema = z.object({
  // ======================================================
  // BASE PRICE
  // ======================================================

  baseFare: z.number(),

  // ======================================================
  // FEES
  // ======================================================

  airportFee: z.number().default(0),

  parkingFee: z.number().default(0),

  tollFee: z.number().default(0),

  serviceFee: z.number().default(0),

  taxes: z.number().default(0),

  // ======================================================
  // DISCOUNT
  // ======================================================

  discount: z.number().default(0),

  // ======================================================
  // TOTAL
  // ======================================================

  totalPrice: z.number(),

  // ======================================================
  // INCLUDED ITEMS
  // ======================================================

  includedItems: z.array(z.string()).default([]),

  // ======================================================
  // EXTRA FEES
  // ======================================================

  extraFees: z.array(AirportTransferExtraFeeSchema).default([]),
});