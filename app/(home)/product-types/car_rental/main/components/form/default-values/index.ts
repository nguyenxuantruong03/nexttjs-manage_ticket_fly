import { CarRentalFormSchema } from "../schema/core/car-rental.schema";

import { carRentalBasicDefaultValues } from "./basic";
import { carRentalTripDefaultValues } from "./trip";
import { carRentalPoliciesDefaultValues } from "./policies";
import { carRentalVehicleDefaultValues } from "./vehicle";
import { carRentalMediaDefaultValues } from "./media";
import { carRentalExtraDefaultValues } from "./extra";
import { carRentalPackageDefaultValues } from "./package";
import { carRentalInsuranceDefaultValues } from "./insurance";
import { carRentalBusinessHoursDefaultValues } from "./business-hours";
import { carRentalDriverDefaultValues } from "./driver";
import { carRentalPickupInstructionDefaultValues } from "./pickup-instruction";

export const defaultCarRentalValues: CarRentalFormSchema = {
  ...carRentalBasicDefaultValues,

  ...carRentalTripDefaultValues,

  ...carRentalPoliciesDefaultValues,

  ...carRentalVehicleDefaultValues,

  ...carRentalMediaDefaultValues,

  ...carRentalExtraDefaultValues,

  ...carRentalPackageDefaultValues,

  ...carRentalInsuranceDefaultValues,

  ...carRentalBusinessHoursDefaultValues,

  ...carRentalDriverDefaultValues,

  ...carRentalPickupInstructionDefaultValues,
};
