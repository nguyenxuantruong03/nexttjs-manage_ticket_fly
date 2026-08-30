import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Facility } from "@/types/common/features/facility/facility";

import { FacilityFormSchema, schema } from "./form/schema";

import { facilityDefaultValues } from "./form/default-values";

import { initFacilityFormValues } from "./form/init-value";

import { facilitySteps } from "./step/steps";

export const facilityFormConfig: EntityFormWizardConfig<
  FacilityFormSchema,
  Facility
> = {
  schema,

  defaultValues: facilityDefaultValues,

  initValues: initFacilityFormValues,

  steps: facilitySteps,

  draftEntity: DraftEntity.Facility,

  messages: {
    create: "Facility created",
    update: "Facility updated",
  },

  redirectDefault: "/facility",
};
