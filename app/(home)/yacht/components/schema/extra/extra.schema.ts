// schema/extra/extra.schema.ts

import { z } from "zod";

import {
  YachtExtraCategory,
  YachtExtraPricingType,
} from "@/types/bookings/yacht/enums";

import { YachtExtraImageSchema } from "./extra-image.schema";
import { YachtPackageExtraSchema } from "../pricing/package-extra.schema";

export const YachtExtraSchema = z.object({
  name: z.string().min(1),

  description: z.string().nullable().optional(),

  category: z.nativeEnum(YachtExtraCategory),

  bookingExtras: z.array(z.any()).default([]),

  pricingType: z.nativeEnum(YachtExtraPricingType),

  packageExtras: z.array(YachtPackageExtraSchema).default([]),

  price: z.number(),

  active: z.boolean(),

  images: z.array(YachtExtraImageSchema).default([]),
});

export type YachtExtraFormValues = z.infer<typeof YachtExtraSchema>;
