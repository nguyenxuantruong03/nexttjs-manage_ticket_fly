"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  SustainabilitySchema,
  SustainabilityFormSchema,
} from "./form/schema";

import { sustainabilityDefaultValues } from "./form/default-values";

import { initSustainabilityFormValues } from "./form/init-value";

import { sustainabilitySteps } from "./step/steps";

import { Sustainability } from "@/types/product-types/hotel/hotel-detail";

export const sustainabilityFormConfig: EntityFormWizardConfig<
  SustainabilityFormSchema,
  Sustainability
> = {
  schema: SustainabilitySchema,

  defaultValues: sustainabilityDefaultValues,

  initValues: initSustainabilityFormValues,

  steps: sustainabilitySteps,

  draftEntity: DraftEntity.HotelSustainability,

  messages: {
    create: "Sustainability created",

    update: "Sustainability updated",
  },

  redirectDefault: "hotel/sustainability",
};