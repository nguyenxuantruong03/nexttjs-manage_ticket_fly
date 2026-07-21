// schema/facilities/marina-facilities.schema.ts

import { z } from "zod";

export const YachtMarinaFacilitiesSchema = z.object({
  marinaId: z.string(),

  fuelStation: z.boolean().nullable().optional(),

  restaurant: z.boolean().nullable().optional(),

  cafe: z.boolean().nullable().optional(),

  parking: z.boolean().nullable().optional(),

  waitingLounge: z.boolean().nullable().optional(),

  toilet: z.boolean().nullable().optional(),

  shower: z.boolean().nullable().optional(),

  drinkingWater: z.boolean().nullable().optional(),

  electricity: z.boolean().nullable().optional(),

  wifi: z.boolean().nullable().optional(),

  security: z.boolean().nullable().optional(),

  cctv: z.boolean().nullable().optional(),

  luggageStorage: z.boolean().nullable().optional(),

  convenienceStore: z.boolean().nullable().optional(),

  atm: z.boolean().nullable().optional(),

  customs: z.boolean().nullable().optional(),

  immigration: z.boolean().nullable().optional(),
});

export type YachtMarinaFacilitiesFormValues = z.infer<
  typeof YachtMarinaFacilitiesSchema
>;
