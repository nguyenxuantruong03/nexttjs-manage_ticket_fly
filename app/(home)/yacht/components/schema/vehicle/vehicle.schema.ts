// schema/vehicle/vehicle.schema.ts

import { z } from "zod";

import { YachtCondition, YachtFuelType } from "@/types/bookings/yacht/enums";

import { YachtCapacitySchema } from "./capacity.schema";
import { YachtSpecificationSchema } from "./specification.schema";
import { YachtVehicleImageSchema } from "./vehicle-image.schema";

import { YachtVehicleFacilitiesSchema } from "../facilities/vehicle-facilities.schema";
import { YachtSafetyEquipmentSchema } from "../facilities/safety-equipment.schema";

export const YachtVehicleSchema = z.object({

  name: z.string().nullable().optional(),

  manufacturer: z.string().nullable().optional(),

  model: z.string().nullable().optional(),

  year: z.number().nullable().optional(),

  registrationNumber: z.string().nullable().optional(),

  lengthMeter: z.number().nullable().optional(),

  widthMeter: z.number().nullable().optional(),

  speedKnots: z.number().nullable().optional(),

  fuelType: z.nativeEnum(YachtFuelType).nullable().optional(),

  condition: z.nativeEnum(YachtCondition).nullable().optional(),

  capacity: YachtCapacitySchema.nullable().optional(),

  facilities: YachtVehicleFacilitiesSchema.nullable().optional(),

  specification: YachtSpecificationSchema.nullable().optional(),

  images: z.array(YachtVehicleImageSchema).default([]),

  safetyEquipment: YachtSafetyEquipmentSchema.nullable().optional(),
});

export type YachtVehicleFormValues = z.infer<typeof YachtVehicleSchema>;
