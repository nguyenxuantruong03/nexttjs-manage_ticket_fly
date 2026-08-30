import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

import { ExtraFeeTypeFormSchema, schema } from "./form/schema";

import { extraFeeTypeDefaultValues } from "./form/default-values";

import { initExtraFeeTypeFormValues } from "./form/init-value";

import { extraFeeTypeSteps } from "./step/steps";

export const extraFeeTypeFormConfig: EntityFormWizardConfig<
  ExtraFeeTypeFormSchema,
  ExtraFeeType
> = {
  schema,

  defaultValues: extraFeeTypeDefaultValues,

  initValues: initExtraFeeTypeFormValues,

  steps: extraFeeTypeSteps,

  draftEntity: DraftEntity.ExtraFeeType,

  messages: {
    create: "Extra fee type created",

    update: "Extra fee type updated",
  },

  redirectDefault: "/commerce/extra-fee-type",
};
