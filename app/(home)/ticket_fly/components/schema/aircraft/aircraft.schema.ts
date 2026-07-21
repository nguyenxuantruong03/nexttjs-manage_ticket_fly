import { z } from "zod";

import { FlyAircraftSpecificationSchema } from "./specification.schema";
import { FlyAircraftFeaturesSchema } from "./feature.schema";
import { FlyCabinSchema } from "./cabin.schema";
import { FlyAircraftImageSchema } from "./image.schema";
import { FlySeatMapSchema } from "./seat-map.schema";

export const FlyAircraftSchema = z.object({
  airlineId: z.string().min(1),

  manufacturer: z.string().optional(),

  model: z.string().optional(),

  code: z.string().optional(),

  registrationNumber: z.string().optional(),

  active: z.boolean(),

  specification: FlyAircraftSpecificationSchema.optional(),

  features: FlyAircraftFeaturesSchema.optional(),

  cabins: z.array(FlyCabinSchema).optional(),

  images: z.array(FlyAircraftImageSchema).optional(),

  seatMap: FlySeatMapSchema.optional(),
});

export type FlyAircraftFormValues = z.infer<typeof FlyAircraftSchema>;
