import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { District } from "@/types/location/district";

import { DistrictFormSchema, DistrictSchema } from "./form/schema";

import { districtDefaultValues } from "./form/default-values";

import { initDistrictFormValues } from "./form/init-value";

import { DistrictSteps } from "./step/steps";

export const districtFormConfig: EntityFormWizardConfig<
  DistrictFormSchema,
  District
> = {
  schema: DistrictSchema,

  defaultValues: districtDefaultValues,

  initValues: initDistrictFormValues,

  steps: DistrictSteps,

  draftEntity: DraftEntity.District,

  messages: {
    create: "District created",

    update: "District updated",
  },

  redirectDefault: "/district",
};
