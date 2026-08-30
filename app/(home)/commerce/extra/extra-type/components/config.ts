import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

import { ExtraTypeFormSchema, schema } from "./form/schema";

import { extraTypeDefaultValues } from "./form/default-values";

import { initExtraTypeFormValues } from "./form/init-value";

import { extraTypeSteps } from "./step/steps";

export const extraTypeFormConfig: EntityFormWizardConfig<
  ExtraTypeFormSchema,
  ExtraType
> = {
  schema,

  defaultValues: extraTypeDefaultValues,

  initValues: initExtraTypeFormValues,

  steps: extraTypeSteps,

  draftEntity: DraftEntity.ExtraType,

  messages: {
    create: "Extra type created",

    update: "Extra type updated",
  },

  redirectDefault: "/commerce/extra-type",
};
