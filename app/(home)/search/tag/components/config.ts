"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { SearchTagFormSchema, schema } from "./form/schema";

import { searchTagDefaultValues } from "./form/default-values";

import { initSearchTagFormValues } from "./form/init-value";

import { searchTagSteps } from "./step/steps";

export const searchTagFormConfig: EntityFormWizardConfig<
  SearchTagFormSchema,
  SearchTag
> = {
  schema,

  defaultValues: searchTagDefaultValues,

  initValues: initSearchTagFormValues,

  steps: searchTagSteps,

  draftEntity: DraftEntity.SearchTag,

  messages: {
    create: "Tag created",

    update: "Tag updated",
  },

  redirectDefault: "/search/tag",
};
