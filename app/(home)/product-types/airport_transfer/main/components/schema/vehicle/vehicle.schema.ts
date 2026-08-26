import { z } from "zod";

import { AirportTransferVehicleCapacitySchema } from "./vehicle-capacity.schema";
import { AirportTransferVehicleImageSchema } from "./vehicle-image.schema";
import { AirportTransferVehicleSpecificationSchema } from "./vehicle-specification.schema";
import { AirportTransferVehicleAvailabilitySchema } from "./vehicle-availability.schema";
import { AirportTransferDriverSchema } from "./driver.schema";
import {
  AirportTransferTransmission,
  AirportTransferVehicleStatus,
} from "@/types/product-types/airport-transfer/enums";
import { AirportTransferVehicleFacilityMapperSchema } from "../vehicle-facility-mapper.schema";

export const AirportTransferVehicleSchema = z.object({
  // =====================================================
  // VEHICLE TYPE
  // =====================================================

  vehicleTypeId: z.string().min(1).nullable(),

  // =====================================================
  // BASIC INFORMATION
  // =====================================================

  name: z.string().nullable(),

  manufacturer: z.string().nullable(),

  model: z.string().nullable(),

  year: z.coerce.number().nullable(),

  color: z.string().min(1).nullable(),

  licensePlate: z.string().nullable(),

  // =====================================================
  // ENGINE / FUEL
  // =====================================================

  transmission: z.nativeEnum(AirportTransferTransmission).nullable(),

  fuelTypeId: z.string().nullable(),

  // =====================================================
  // STATUS
  // =====================================================

  status: z.nativeEnum(AirportTransferVehicleStatus),

  // =====================================================
  // FACILITIES
  // =====================================================

  facilities: z.array(AirportTransferVehicleFacilityMapperSchema).default([]),

  // =====================================================
  // SPECIFICATION
  // =====================================================

  specification: AirportTransferVehicleSpecificationSchema.nullable(),

  // =====================================================
  // IMAGES
  // =====================================================

  images: z.array(AirportTransferVehicleImageSchema).default([]),
  availability: z.array(AirportTransferVehicleAvailabilitySchema),
  capacity: AirportTransferVehicleCapacitySchema.nullable(),
  // =====================================================
  // DRIVERS
  // =====================================================

  drivers: z.array(AirportTransferDriverSchema).default([]),
});

export type AirportTransferVehicleFormSchema = z.infer<
  typeof AirportTransferVehicleSchema
>;
