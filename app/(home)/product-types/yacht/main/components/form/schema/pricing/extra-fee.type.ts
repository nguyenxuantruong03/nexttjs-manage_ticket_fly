import { z } from "zod";

import { PriceCalculationType } from "@/types/common/enums";

export const yachtExtraFeeSchema = z.object({
  extraFeeTypeId: z.string(),
  amount: z.number(),
  calculationType: z.nativeEnum(PriceCalculationType),
  active: z.boolean(),
});

export type YachtExtraFeeFormSchema = z.infer<typeof yachtExtraFeeSchema>;
