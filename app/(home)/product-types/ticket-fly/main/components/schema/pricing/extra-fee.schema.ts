import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

export const FlyExtraFeeSchema = z.object({
  // ======================================================
  // EXTRA FEE TYPE
  // ======================================================

  extraFeeTypeId: z.string(),

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

export type FlyExtraFeeFormValues = z.infer<typeof FlyExtraFeeSchema>;
