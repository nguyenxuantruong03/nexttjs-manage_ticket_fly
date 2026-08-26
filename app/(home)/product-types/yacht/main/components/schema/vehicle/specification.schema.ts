// schema/vehicle/specification.schema.ts

import { z } from "zod";

export const YachtSpecificationSchema = z.object({
  vehicleId: z.string(),

  enginePowerHp: z.number().nullable().optional(),

  cruisingSpeedKnots: z.number().nullable().optional(),

  maxSpeedKnots: z.number().nullable().optional(),

  fuelCapacityLiter: z.number().nullable().optional(),

  rangeNm: z.number().nullable().optional(),
});

export type YachtSpecificationFormValues = z.infer<
  typeof YachtSpecificationSchema
>;