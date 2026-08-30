import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { FuelType } from "@/types/common/catalog/fuel-type";

import { FuelTypeFormSchema, schema } from "./form/schema";

import { fuelTypeDefaultValues } from "./form/default-values";

import { initFuelTypeFormValues } from "./form/init-value";

import { fuelTypeSteps } from "./step/steps";

// ======================================================
// FORM CONFIG
// ======================================================

export const fuelTypeFormConfig: EntityFormWizardConfig<
  FuelTypeFormSchema,
  FuelType
> = {
  schema,
  defaultValues: fuelTypeDefaultValues,
  initValues: initFuelTypeFormValues,
  steps: fuelTypeSteps,
  draftEntity: DraftEntity.FuelType,
  messages: {
    create: "Fuel type created",
    update: "Fuel type updated",
  },
  redirectDefault: "/catalog/fuel-type",
};
