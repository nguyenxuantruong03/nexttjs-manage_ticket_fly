import { z } from "zod";

import {
  RentalFuelType,
  RentalTransmission,
  RentalVehicleStatus,
  RentalVehicleType,
} from "@/types/bookings/car_rental/enums";

import { CarRentalVehicleCapacitySchema } from "./capacity.schema";

import { CarRentalVehicleFeaturesSchema } from "./feature.schema";

import { CarRentalVehicleImageSchema } from "./image.schema";

import { CarRentalVehicleLocationSchema } from "./location.schema";

import { CarRentalVehicleMaintenanceSchema } from "./maintenance.schema";

import { CarRentalVehicleSpecificationSchema } from "./specification.schema";

import { CarRentalVehicleDocumentSchema } from "./document.schema";
import { CarRentalPriceSchema } from "../pricing/price.schema";
import { CarRentalAvailabilityCalendarSchema } from "../availability-calendar.schema";
import { CarRentalInventoryLockSchema } from "../trip/inventory-lock.schema";

export const CarRentalVehicleSchema = z.object({
  rentalId: z.string(),

  active: z.boolean().default(true),

  type: z.nativeEnum(RentalVehicleType),

  status: z.nativeEnum(RentalVehicleStatus).nullable().optional(),

  brand: z.string().nullable().optional(),

  model: z.string().nullable().optional(),

  year: z.number().nullable().optional(),

  color: z.string().nullable().optional(),

  licensePlate: z.string().nullable().optional(),

  transmission: z.nativeEnum(RentalTransmission).nullable().optional(),

  fuelType: z.nativeEnum(RentalFuelType).nullable().optional(),

  fuelCapacityLiters: z.number().nullable().optional(),

  mileageKm: z.number().nullable().optional(),

  mileageLimitPerDay: z.number().nullable().optional(),

  unlimitedMileage: z.boolean().nullable().optional(),

  capacity: CarRentalVehicleCapacitySchema.nullable().optional(),

  features: CarRentalVehicleFeaturesSchema.nullable().optional(),

  locationCurrent: CarRentalVehicleLocationSchema.nullable().optional(),

  images: z.array(CarRentalVehicleImageSchema).default([]).optional(),

  maintenance: z
    .array(CarRentalVehicleMaintenanceSchema)
    .default([])
    .optional(),
  specification: CarRentalVehicleSpecificationSchema.nullable().optional(),
  document: z.array(CarRentalVehicleDocumentSchema).default([]).optional(),
  price: z.array(CarRentalPriceSchema).default([]).optional(),
  carLocks: z.array(CarRentalInventoryLockSchema).default([]).optional(),
  calendar: z.array(CarRentalAvailabilityCalendarSchema).default([]).optional(),
});
