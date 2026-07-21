import { z } from "zod";

import { AirportTransferVehicleCapacitySchema } from "./vehicle-capacity.schema";

import { AirportTransferVehicleFeaturesSchema } from "./vehicle-features.schema";

import { AirportTransferVehicleImageSchema } from "./vehicle-image.schema";

import { AirportTransferVehicleSpecificationSchema } from "./vehicle-specification.schema";

import { AirportTransferVehicleAvailabilitySchema } from "./vehicle-availability.schema";

import { AirportTransferDriverSchema } from "./driver.schema";
import {
  AirportTransferFuelType,
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
  AirportTransferVehicleType,
} from "@/types/bookings/airport-transfer/enums";

export const AirportTransferVehicleSchema = z.object({
  type: z.nativeEnum(AirportTransferVehicleType),

  name: z.string().optional(),

  manufacturer: z.string().optional(),

  model: z.string().optional(),

  year: z.number().optional(),

  color: z.string().optional(),

  licensePlate: z.string().optional(),

  transmission: z.nativeEnum(AirportTransferTransmission).optional(),

  fuelType: z.nativeEnum(AirportTransferFuelType).optional(),

  status: z.nativeEnum(AirportTransferVehicleStatus),

  capacity: AirportTransferVehicleCapacitySchema.optional(),

  features: AirportTransferVehicleFeaturesSchema.optional(),

  specification: AirportTransferVehicleSpecificationSchema.optional(),

  images: z.array(AirportTransferVehicleImageSchema),

  availability: z.array(AirportTransferVehicleAvailabilitySchema),

  drivers: z.array(AirportTransferDriverSchema),
});
