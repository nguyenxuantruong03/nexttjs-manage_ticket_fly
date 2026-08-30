import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { VehicleType } from "@/types/common/catalog/vehicle-type.type";

import { VehicleTypeFormSchema, schema } from "./form/schema";

import { vehicleTypeDefaultValues } from "./form/default-values";

import { initVehicleTypeFormValues } from "./form/init-value";

import { vehicleTypeSteps } from "./step/steps";

export const vehicleTypeFormConfig: EntityFormWizardConfig<
  VehicleTypeFormSchema,
  VehicleType
> = {
  schema,

  defaultValues: vehicleTypeDefaultValues,

  initValues: initVehicleTypeFormValues,

  steps: vehicleTypeSteps,

  draftEntity: DraftEntity.VehicleType,

  messages: {
    create: "Vehicle type created",

    update: "Vehicle type updated",
  },

  redirectDefault: "/commerce/vehicle-type",
};
