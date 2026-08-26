import { z } from "zod";

import { CarRentalPriceSchema } from "../pricing/price.schema";

import { CarRentalVehicleCapacitySchema } from "./capacity.schema";
import { CarRentalVehicleDocumentSchema } from "./document.schema";
import { CarRentalVehicleMediaSchema } from "./image.schema";
import { CarRentalVehicleLocationSchema } from "./location.schema";
import { CarRentalVehicleMaintenanceSchema } from "./maintenance.schema";
import { CarRentalVehicleSpecificationSchema } from "./specification.schema";


import {
  RentalFuelType,
  RentalTransmission,
  RentalVehicleStatus,
} from "@/types/product-types/car_rental/enums";
import { CarRentalVehicleFacilityMapperSchema } from "./facility";

// ======================================================
// CAR RENTAL VEHICLE
// ======================================================

export const CarRentalVehicleSchema = z.object({
  price: z.array(z.lazy(() => CarRentalPriceSchema)),

  vehicleTypeId: z.string().nullable(),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  status: z.nativeEnum(RentalVehicleStatus).nullable(),

  // ======================================================
  // BASIC INFORMATION
  // ======================================================

  brand: z.string().nullable(),

  model: z.string().nullable(),

  year: z.number().nullable(),

  color: z.string().nullable(),

  licensePlate: z.string().nullable(),

  transmission: z.nativeEnum(RentalTransmission).nullable(),

  fuelType: z.nativeEnum(RentalFuelType).nullable(),

  fuelCapacityLiters: z.number().nullable(),

  mileageKm: z.number().nullable(),

  mileageLimitPerDay: z.number().nullable(),

  unlimitedMileage: z.boolean().nullable(),

  // ======================================================
  // VEHICLE DATA
  // ======================================================

  capacity: z.lazy(() => CarRentalVehicleCapacitySchema).nullable(),

  facilities: z.array(z.lazy(() => CarRentalVehicleFacilityMapperSchema)),

  specification: z.lazy(() => CarRentalVehicleSpecificationSchema).nullable(),

  locationCurrent: z.lazy(() => CarRentalVehicleLocationSchema).nullable(),

  // ======================================================
  // MEDIA
  // ======================================================

  medias: z.array(z.lazy(() => CarRentalVehicleMediaSchema)),

  // ======================================================
  // OTHER
  // ======================================================

  maintenance: z.array(z.lazy(() => CarRentalVehicleMaintenanceSchema)),

  document: z.array(z.lazy(() => CarRentalVehicleDocumentSchema)),

});

// ======================================================
// TYPE
// ======================================================

export type CarRentalVehicleSchemaType = z.infer<typeof CarRentalVehicleSchema>;
