import { FuelPolicy } from "../enums";
import { CarRentalCancellationPolicy } from "./cancellation.types";
import { CarRentalDamagePolicy } from "./damage.types";
import { CarRentalMileagePolicy } from "./mileage.types";
import { CarRentalRequiredDocuments } from "./required-documents.types";
import { CarRentalRules } from "./rules.types";

export interface CarRentalPolicies {
  id: string;

  rentalId: string;

  minimumDriverAge?: number;

  minimumLicenseYears?: number;

  depositAmount?: number;

  mileage?: CarRentalMileagePolicy;
  cancellation?: CarRentalCancellationPolicy;
  rules?: CarRentalRules;
  requiredDocuments?: CarRentalRequiredDocuments;
  fuelPolicy?: FuelPolicy;
  damagePolicy?: CarRentalDamagePolicy;
}