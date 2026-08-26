import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

// ======================================================
// HOTEL EXTRA FEE - MANAGE
// ======================================================

export const hotelExtraFeeSchema = z.object({
  // ====================================================
  // EXTRA FEE TYPE
  // ====================================================

  extraFeeTypeId: z.string(),

  // ====================================================
  // BREAKDOWN
  // ====================================================

  breakdownId: z.string(),

  // ====================================================
  // PRICE
  // ====================================================

  amount: z.number(),

  calculationType: z.nativeEnum(PriceCalculationType),

  // ====================================================
  // STATUS
  // ====================================================

  active: z.boolean(),
});

export type HotelExtraFee = z.infer<typeof hotelExtraFeeSchema>;
