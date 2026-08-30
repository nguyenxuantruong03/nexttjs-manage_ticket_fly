import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Language } from "@/types/location/language";

import { LanguageFormSchema, LanguageSchema } from "./form/schema";

import { languageDefaultValues } from "./form/default-values";

import { initLanguageFormValues } from "./form/init-value";

import { languageSteps } from "./step/steps";

export const languageFormConfig: EntityFormWizardConfig<
  LanguageFormSchema,
  Language
> = {
  schema: LanguageSchema,

  defaultValues: languageDefaultValues,

  initValues: initLanguageFormValues,

  steps: languageSteps,

  draftEntity: DraftEntity.Language,

  messages: {
    create: "Language created",

    update: "Language updated",
  },

  redirectDefault: "/language",
};
