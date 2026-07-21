import { z } from "zod";
import { YachtMarinaFacilitiesSchema } from "../facilities/marina-facilities.schema";

export const YachtMarinaSchema = z.object({
  id: z.string().optional(),

  name: z.string().min(1),

  addressId: z.string(),

  latitude: z.number().nullable().optional(),

  longitude: z.number().nullable().optional(),

  country: z.string().nullable().optional(),

  city: z.string().nullable().optional(),

  contactPhone: z.string().nullable().optional(),

  operatingHours: z.string().nullable().optional(),

  marinaFacilities: YachtMarinaFacilitiesSchema.nullable().optional(),
});

export type YachtMarinaFormValues = z.infer<typeof YachtMarinaSchema>;
