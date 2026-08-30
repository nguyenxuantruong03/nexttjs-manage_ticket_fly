import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  CarRentalInsuranceTypeSchema,
  CarRentalInsuranceTypeFormSchema,
} from "./form/schema";

import { carRentalInsuranceTypeDefaultValues } from "./form/default-values";

import { initCarRentalInsuranceTypeFormValues } from "./form/init-value";

import { carRentalInsuranceTypeSteps } from "./step/steps";

import { InsuranceType } from "@/types/product-types/car_rental/insurance-type.type";

export const carRentalInsuranceTypeFormConfig: EntityFormWizardConfig<
  CarRentalInsuranceTypeFormSchema,
  InsuranceType
> = {
  schema: CarRentalInsuranceTypeSchema,

  defaultValues: carRentalInsuranceTypeDefaultValues,

  initValues: initCarRentalInsuranceTypeFormValues,

  steps: carRentalInsuranceTypeSteps,

  draftEntity: DraftEntity.CarRentalInsuranceType,

  messages: {
    create: "Car rental insurance type created",
    update: "Car rental insurance type updated",
  },

  redirectDefault: "/car-rental/insurance-type",
};