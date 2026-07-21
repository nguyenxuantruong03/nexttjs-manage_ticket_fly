// schema/vehicle/vehicle-image.schema.ts

import { z } from "zod";

import { YachtImageCategory } from "@/types/bookings/yacht/enums";

export const YachtVehicleImageSchema = z.object({
  vehicleId: z.string(),

  url: z.string().min(1),

  category: z.nativeEnum(YachtImageCategory),

  isPrimary: z.boolean(),

  sortOrder: z.number(),
});

export type YachtVehicleImageFormValues = z.infer<
  typeof YachtVehicleImageSchema
>;