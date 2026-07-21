import { z } from "zod";

import { CarRentalMileagePolicySchema } from "./mileage.schema";

import { CarRentalCancellationPolicySchema } from "./cancellation.schema";

import { CarRentalDamagePolicySchema } from "./damage.schema";

import { CarRentalRequiredDocumentsSchema } from "./required-documents.schema";

import { CarRentalRulesSchema } from "./rules.schema";
import { FuelPolicy } from "@/types/bookings/car_rental/enums";

export const CarRentalPoliciesSchema = z.object({
  rentalId: z.string(),

  minimumDriverAge: z.number().optional(),

  minimumLicenseYears: z.number().optional(),

  depositAmount: z.number().optional(),

  mileage: CarRentalMileagePolicySchema.optional(),

  cancellation: CarRentalCancellationPolicySchema.optional(),

  rules: CarRentalRulesSchema.optional(),

  requiredDocuments: CarRentalRequiredDocumentsSchema.optional(),

  fuelPolicy: z.nativeEnum(FuelPolicy).optional(),

  damagePolicy: CarRentalDamagePolicySchema.optional(),
});
