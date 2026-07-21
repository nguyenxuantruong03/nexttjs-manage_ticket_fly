import { z } from "zod";

import { CarRentalTripSchema } from "../trip/trip.schema";

import { CarRentalPoliciesSchema } from "../policies/policies.schema";

import { CarRentalVehicleSchema } from "../vehicle/vehicle.schema";

import { CarRentalImageSchema } from "./image.schema";

import { CarRentalBusinessHourSchema } from "./business-hour.schema";

import { CarRentalExtraSchema } from "../extra/extra.schema";

import { CarRentalInsuranceSchema } from "../insurance/insurance.schema";
import { DriverOption } from "@/types/bookings/car_rental/enums";
import { CarRentalDriverSchema } from "../trip/driver.schema";
import { CarRentalPickupInstructionSchema } from "../trip/pickup-instruction.schema";

export const CarRentalSchema = z.object({
  // =====================
  // BASIC
  // =====================

  driverOption: z.nativeEnum(DriverOption),

  name: z.string().min(1),

  slug: z.string().min(1),

  aliases: z.array(z.string()).default([]),

  keywords: z.array(z.string()).default([]),

  searchText: z.string().optional(),

  featured: z.boolean().default(false),

  searchPriority: z.number().default(0),

  active: z.boolean().default(true),

  providerBookingId: z.string(),

  // =====================
  // RELATIONS
  // =====================

  trip: CarRentalTripSchema.optional(),

  policies: CarRentalPoliciesSchema.optional(),

  vehicle: z.array(CarRentalVehicleSchema).default([]),

  images: z.array(CarRentalImageSchema).default([]),

  extras: z.array(CarRentalExtraSchema).default([]),

  insurances: z.array(CarRentalInsuranceSchema).default([]),

  businessHours: z.array(CarRentalBusinessHourSchema).default([]),

  drivers: z.array(CarRentalDriverSchema).default([]),

  pickupInstructions: z.array(CarRentalPickupInstructionSchema).default([]),
});


export type CarRentalFormValues = z.infer<typeof CarRentalSchema>;
