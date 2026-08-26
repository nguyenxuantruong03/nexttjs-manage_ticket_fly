// schema/vehicle/vehicle.schema.ts

import { z } from "zod";

import { YachtCapacitySchema } from "./capacity.schema";
import { YachtSpecificationSchema } from "./specification.schema";
import { YachtVehicleFacilityMapperSchema } from "../facilities/yacht-facilities.schema";
import { YachtVehicleImageSchema } from "./vehicle-image.schema";
import { YachtConditionSchema } from "../yacht-condition";

export const YachtVehicleSchema = z.object({
  name: z.string().nullable().optional(),

  manufacturer: z.string().nullable().optional(),

  model: z.string().nullable().optional(),

  year: z.number().nullable().optional(),

  registrationNumber: z.string().nullable().optional(),

  lengthMeter: z.number().nullable().optional(),

  widthMeter: z.number().nullable().optional(),

  speedKnots: z.number().nullable().optional(),

  fuelTypeId: z.string().nullable().optional(),

  conditionId: z.string().nullable().optional(),

  condition: YachtConditionSchema.nullable().optional(),

  capacity: YachtCapacitySchema.nullable().optional(),

  facilities: z.array(YachtVehicleFacilityMapperSchema).optional(),

  specification: YachtSpecificationSchema.nullable().optional(),

  images: z.array(YachtVehicleImageSchema).optional(),
});

export type YachtVehicleFormValues = z.infer<typeof YachtVehicleSchema>;
