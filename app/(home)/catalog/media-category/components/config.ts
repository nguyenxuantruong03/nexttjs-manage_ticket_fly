import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { MediaCategory } from "@/types/common/catalog/media-category";

import {
  MediaCategoryFormSchema,
  schema,
} from "./form/schema";

import { mediaCategoryDefaultValues } from "./form/default-values";

import { initMediaCategoryFormValues } from "./form/init-value";

import { mediaCategorySteps } from "./step/steps";

// ======================================================
// FORM CONFIG
// ======================================================

export const mediaCategoryFormConfig: EntityFormWizardConfig<
  MediaCategoryFormSchema,
  MediaCategory
> = {
  schema,

  defaultValues: mediaCategoryDefaultValues,

  initValues: initMediaCategoryFormValues,

  steps: mediaCategorySteps,

  draftEntity: DraftEntity.MediaCategory,

  messages: {
    create: "Media category created",
    update: "Media category updated",
  },

  redirectDefault: "/catalog/media-category",
};
