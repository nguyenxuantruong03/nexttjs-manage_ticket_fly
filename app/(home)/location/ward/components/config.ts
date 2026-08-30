import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Ward } from "@/types/location/ward";

import { WardFormSchema, WardSchema } from "./form/schema";

import { wardDefaultValues } from "./form/default-values";

import { wardSteps } from "./step/steps";
import { initWardFormValues } from "./form/init-value";

export const wardFormConfig: EntityFormWizardConfig<WardFormSchema, Ward> = {
  schema: WardSchema,

  defaultValues: wardDefaultValues,

  initValues: initWardFormValues,

  steps: wardSteps,

  draftEntity: DraftEntity.Ward,

  messages: {
    create: "Ward created",

    update: "Ward updated",
  },

  redirectDefault: "/ward",
};
