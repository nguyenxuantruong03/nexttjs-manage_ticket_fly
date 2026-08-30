import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  CarRentalInsuranceBenefitTypeSchema,
  CarRentalInsuranceBenefitTypeFormSchema,
} from "./form/schema";

import { carRentalInsuranceBenefitTypeDefaultValues } from "./form/default-values";

import { initCarRentalInsuranceBenefitTypeFormValues } from "./form/init-value";

import { carRentalInsuranceBenefitTypeSteps } from "./step/steps";

import { InsuranceBenefitType } from "@/types/product-types/car_rental/insurance-type.type";

export const carRentalInsuranceBenefitTypeFormConfig: EntityFormWizardConfig<
  CarRentalInsuranceBenefitTypeFormSchema,
  InsuranceBenefitType
> = {
  schema: CarRentalInsuranceBenefitTypeSchema,

  defaultValues: carRentalInsuranceBenefitTypeDefaultValues,

  initValues: initCarRentalInsuranceBenefitTypeFormValues,

  steps: carRentalInsuranceBenefitTypeSteps,

  draftEntity: DraftEntity.CarRentalInsuranceBenefitType,

  messages: {
    create: "Car rental insurance benefit type created",
    update: "Car rental insurance benefit type updated",
  },

  redirectDefault: "/car-rental/insurance-benefit-type",
};
