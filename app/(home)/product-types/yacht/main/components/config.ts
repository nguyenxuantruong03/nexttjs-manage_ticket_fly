"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { YachtFormSchema, YachtSchema } from "./form/schema/core/yacht.schema";

import { defaultYachtValues } from "./form/default-values";

import { yachtSteps } from "./step/steps";

import { Yacht } from "@/types/product-types/yacht/core/yacht.types";
import { initYachtFormValues } from "./form/init-values";

export const yachtFormConfig: EntityFormWizardConfig<YachtFormSchema, Yacht> = {
  schema: YachtSchema,

  defaultValues: defaultYachtValues,

  initValues: initYachtFormValues,

  steps: yachtSteps,

  draftEntity: DraftEntity.Yacht,

  messages: {
    create: "Yacht created",

    update: "Yacht updated",
  },

  redirectDefault: "/yacht",
};
