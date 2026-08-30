import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

export const CarRentalExtraFeeSchema = z.object({
  // ======================================================
  // EXTRA FEE TYPE
  // ======================================================

  extraFeeTypeId: z.string().min(1),

  // ======================================================
  // FEE
  // ======================================================

  amount: z.number(),

  calculationType: z.nativeEnum(PriceCalculationType),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean().default(true),
});

export type CarRentalExtraFeeFormSchema = z.infer<
  typeof CarRentalExtraFeeSchema
>;