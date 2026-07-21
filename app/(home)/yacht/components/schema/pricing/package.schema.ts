// schema/pricing/package.schema.ts

import { z } from "zod";

import { YachtDurationType } from "@/types/bookings/yacht/enums";

import { YachtPackageExtraSchema } from "./package-extra.schema";
import { YachtPackageImageSchema } from "./package-image.schema";

export const YachtPackageSchema = z.object({

  name: z.string().min(1),

  description: z.string().nullable().optional(),

  duration: z.number().nullable().optional(),

  durationType: z.nativeEnum(YachtDurationType),

  maxGuests: z.number().nullable().optional(),

  price: z.number(),

  includedItems: z.array(z.string()).default([]),

  extras: z.array(YachtPackageExtraSchema).default([]),

  images: z.array(YachtPackageImageSchema).default([]),

  active: z.boolean(),
});

export type YachtPackageFormValues = z.infer<
  typeof YachtPackageSchema
>;