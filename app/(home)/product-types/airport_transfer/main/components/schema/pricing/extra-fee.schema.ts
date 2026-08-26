import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

export const AirportTransferExtraFeeSchema = z.object({
  // ======================================================
  // EXTRA FEE TYPE
  // ======================================================

  extraFeeTypeId: z.string().min(1),

  // ======================================================
  // PRICE
  // ======================================================

  amount: z.number(),

  calculationType: z.nativeEnum(PriceCalculationType),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),
});