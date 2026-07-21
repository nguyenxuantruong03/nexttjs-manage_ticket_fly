// schema/pricing/price-option.schema.ts

import { z } from "zod";

import { YachtDurationType } from "@/types/bookings/yacht/enums";

export const YachtPriceOptionSchema = z.object({

  name: z.string().min(1),

  duration: z.number().nullable().optional(),

  durationType: z.nativeEnum(YachtDurationType),

  minGuests: z.number().nullable().optional(),

  maxGuests: z.number().nullable().optional(),

  originalPrice: z.number().nullable().optional(),

  includedItems: z.array(z.string()).default([]),
});

export type YachtPriceOptionFormValues = z.infer<typeof YachtPriceOptionSchema>;
