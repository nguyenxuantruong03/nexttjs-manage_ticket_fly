// schema/vehicle/vehicle-image.schema.ts

import { z } from "zod";

export const YachtVehicleImageSchema = z.object({
  vehicleId: z.string(),

  mediaId: z.string(),

  categoryId: z.string().nullable().optional(),

  isPrimary: z.boolean(),

  sortOrder: z.number(),
});

export type YachtVehicleImageFormValues = z.infer<
  typeof YachtVehicleImageSchema
>;
