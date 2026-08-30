import { CarRental } from "@/types/product-types/car_rental/core/car-rental.types";

import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

import { defaultCarRentalValues } from "../default-values";

import { initCarRentalBasicValues } from "./basic";
import { initCarRentalTripValues } from "./trip";
import { initCarRentalPoliciesValues } from "./policies";
import { initCarRentalVehicleValues } from "./vehicle";
import { initCarRentalMediaValues } from "./media";
import { initCarRentalExtraValues } from "./extra";
import { initCarRentalPackageValues } from "./package";
import { initCarRentalInsuranceValues } from "./insurance";
import { initCarRentalBusinessHoursValues } from "./business-hours";
import { initCarRentalDriverValues } from "./driver";
import { initCarRentalPickupInstructionValues } from "./pickup-instruction";

export function initCarRentalFormValues(
  rental?: CarRental,
): CarRentalFormSchema {
  if (!rental) {
    return structuredClone(defaultCarRentalValues);
  }

  return {
    ...initCarRentalBasicValues(rental),

    ...initCarRentalTripValues(rental),

    ...initCarRentalPoliciesValues(rental),

    ...initCarRentalVehicleValues(rental),

    ...initCarRentalMediaValues(rental),

    ...initCarRentalExtraValues(rental),

    ...initCarRentalPackageValues(rental),

    ...initCarRentalInsuranceValues(rental),

    ...initCarRentalBusinessHoursValues(rental),

    ...initCarRentalDriverValues(rental),

    ...initCarRentalPickupInstructionValues(rental),
  };
}
