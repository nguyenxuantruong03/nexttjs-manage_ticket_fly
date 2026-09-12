import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Extra } from "@/types/common/commerce/extra/extra.type";

import { ExtraFormSchema, schema } from "./form/schema";

import { extraDefaultValues } from "./form/default-values";

import { initExtraFormValues } from "./form/init-value";

import { extraSteps } from "./step/steps";
import { ExtraService } from "@/services/commerce/extra/client";

export type ExtraCreateInput = Parameters<typeof ExtraService.create>[0];

export type ExtraUpdateInput = Parameters<typeof ExtraService.update>[1];

export const extraFormConfig: EntityFormWizardConfig<
  ExtraFormSchema,
  Extra,
  ExtraCreateInput,
  ExtraUpdateInput
> = {
  schema,

  defaultValues: extraDefaultValues,

  initValues: initExtraFormValues,

  steps: extraSteps,

  draftEntity: DraftEntity.Extra,

  messages: {
    create: "Extra created",

    update: "Extra updated",
  },

  redirectDefault: "/commerce/extra",
};
