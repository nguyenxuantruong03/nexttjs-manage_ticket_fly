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

  status: z.nativeEnum(RentalVehicleStatus).optional(),

  brand: z.string().optional(),

  model: z.string().optional(),

  year: z.number().optional(),

  color: z.string().optional(),

  licensePlate: z.string().optional(),

  transmission: z.nativeEnum(RentalTransmission).optional(),

  fuelType: z.nativeEnum(RentalFuelType).optional(),

  fuelCapacityLiters: z.number().optional(),

  mileageKm: z.number().optional(),

  mileageLimitPerDay: z.number().optional(),

  unlimitedMileage: z.boolean().optional(),

  capacity: CarRentalVehicleCapacitySchema.optional(),

  features: CarRentalVehicleFeaturesSchema.optional(),

  locationCurrent: CarRentalVehicleLocationSchema.optional(),

  images: z.array(CarRentalVehicleImageSchema).default([]),

  maintenance: z.array(CarRentalVehicleMaintenanceSchema).default([]),
  specification: z.array(CarRentalVehicleSpecificationSchema).default([]),
  document: z.array(CarRentalVehicleDocumentSchema).default([]),
  price: z.array(CarRentalPriceSchema).default([]),
  carLocks: z.array(CarRentalInventoryLockSchema).default([]),
  calendar: z.array(CarRentalAvailabilityCalendarSchema).default([]),
});
