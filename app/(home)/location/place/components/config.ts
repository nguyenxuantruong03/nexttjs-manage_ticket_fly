import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { Place } from "@/types/location/place/place";

import { PlaceFormSchema, PlaceSchema } from "./form/schema";

import { placeDefaultValues } from "./form/default-values";

import { initPlaceFormValues } from "./form/init-value";

import { placeSteps } from "./step/steps";

export const placeFormConfig: EntityFormWizardConfig<PlaceFormSchema, Place> = {
  schema: PlaceSchema,

  defaultValues: placeDefaultValues,

  initValues: initPlaceFormValues,

  steps: placeSteps,

  draftEntity: DraftEntity.Place,

  messages: {
    create: "Place created",

    update: "Place updated",
  },

  redirectDefault: "/location/place",
};
