import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { FacilityCategoryFormSchema, schema } from "./form/schema";

import { facilityCategoryDefaultValues } from "./form/default-values";

import { initFacilityCategoryFormValues } from "./form/init-value";

import { facilityCategorySteps } from "./step/steps";

export const facilityCategoryFormConfig: EntityFormWizardConfig<
  FacilityCategoryFormSchema,
  FacilityCategory
> = {
  schema,

  defaultValues: facilityCategoryDefaultValues,

  initValues: initFacilityCategoryFormValues,

  steps: facilityCategorySteps,

  draftEntity: DraftEntity.FacilityCategory,

  messages: {
    create: "Facility category created",
    update: "Facility category updated",
  },

  redirectDefault: "/features/facility-category",
};
