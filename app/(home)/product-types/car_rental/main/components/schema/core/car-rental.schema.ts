import { z } from "zod";


import { CarRentalInsuranceSchema } from "../insurance/insurance.schema";
import { CarRentalDriverSchema } from "../trip/driver.schema";
import { CarRentalPickupInstructionSchema } from "../trip/pickup-instruction.schema";
import { CarRentalTripSchema } from "../trip/trip.schema";
import { CarRentalVehicleSchema } from "../vehicle/vehicle.schema";
import { CarRentalBusinessHourSchema } from "./business-hour.schema";
import { CarRentalMediaSchema } from "./image.schema";
import { CarRentalPolicyMapperSchema } from "../policies/policies.schema";
import { CarRentalRequiredDocumentTypeSchema } from "../policies/required-documents.schema";
import { DriverOption } from "@/types/product-types/car_rental/enums";
import { CarRentalExtraMapperSchema } from "../carRental-extra-mapper.type";
import { CarRentalPackageMapperSchema } from "../carRental-package-mapper.type";


export const CarRentalSchema = z.object({
  // ======================================================
  // CONFIGURATION
  // ======================================================

  driverOption: z.nativeEnum(DriverOption),

  serviceTypeId: z.string(),

  bookingItemTypeId: z.string(),

  // ======================================================
  // TRIP
  // ======================================================

  trip: CarRentalTripSchema.nullable(),

  // ======================================================
  // POLICIES / DOCUMENTS
  // ======================================================

  policies: z.array(CarRentalPolicyMapperSchema),

  requiredDocuments: z.array(CarRentalRequiredDocumentTypeSchema),

  // ======================================================
  // VEHICLES
  // ======================================================

  vehicle: z.array(CarRentalVehicleSchema),

  // ======================================================
  // MEDIA
  // ======================================================

  medias: z.array(CarRentalMediaSchema),

  // ======================================================
  // EXTRA
  // ======================================================

  carRentalExtraMapper: z.array(CarRentalExtraMapperSchema),

  // ======================================================
  // INSURANCE
  // ======================================================

  insurances: z.array(CarRentalInsuranceSchema),

  // ======================================================
  // BUSINESS HOURS
  // ======================================================

  businessHours: z.array(CarRentalBusinessHourSchema),

  // ======================================================
  // PICKUP INSTRUCTIONS
  // ======================================================

  pickupInstructions: z.array(CarRentalPickupInstructionSchema),

  // ======================================================
  // DRIVERS
  // ======================================================

  drivers: z.array(CarRentalDriverSchema),

  // ======================================================
  // PACKAGE
  // ======================================================

  carRentalPackageMapper: z.array(CarRentalPackageMapperSchema),

  // ======================================================
  // STATUS
  // ======================================================

  active: z.boolean(),

  // ======================================================
  // BASIC INFORMATION
  // ======================================================

  name: z.string().min(1),

  // ======================================================
  // SEARCH CONFIGURATION
  // ======================================================

  tagIds: z.array(z.string()).default([]),

  searchable: z.boolean(),

  featured: z.boolean(),

  searchPriority: z.coerce.number().default(0),

  // ======================================================
  // PROVIDER
  // ======================================================

  providerBookingId: z.string(),
});

export type CarRentalFormSchema = z.infer<typeof CarRentalSchema>;
