import { z } from "zod";

export const FlyAircraftSpecificationSchema = z.object({
  // ======================================================
  // SPECIFICATION
  // ======================================================

  maxRangeKm: z.number().optional(),

  cruiseSpeed: z.number().optional(),

  maxPassengers: z.number().optional(),

  engineType: z.string().optional(),

  engineCount: z.number().optional(),

  wingspan: z.number().optional(),

  length: z.number().optional(),

  height: z.number().optional(),

  firstFlightYear: z.number().optional(),
});

export type FlyAircraftSpecificationFormValues = z.infer<
  typeof FlyAircraftSpecificationSchema
>;
