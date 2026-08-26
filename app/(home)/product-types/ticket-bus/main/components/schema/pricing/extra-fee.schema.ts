import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

export const BusExtraFeeSchema = z.object({
  // ======================================================
  // RELATIONS
  // ======================================================

  extraFeeTypeId: z.string(),

  // ======================================================
  // FEE
  // ======================================================

  amount: z.number(),

  calculationType: z.nativeEnum(PriceCalculationType),

  active: z.boolean(),
});

export type BusExtraFeeFormValues = z.infer<typeof BusExtraFeeSchema>;
