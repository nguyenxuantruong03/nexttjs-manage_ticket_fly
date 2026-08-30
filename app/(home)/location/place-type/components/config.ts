import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { PlaceType } from "@/types/location/place/place-type.type";

import { PlaceTypeFormSchema, PlaceTypeSchema } from "./form/schema";

import { placeTypeDefaultValues } from "./form/default-values";

import { initPlaceTypeFormValues } from "./form/init-value";

import { placeTypeSteps } from "./step/steps";

export const placeTypeFormConfig: EntityFormWizardConfig<
  PlaceTypeFormSchema,
  PlaceType
> = {
  schema: PlaceTypeSchema,

  defaultValues: placeTypeDefaultValues,

  initValues: initPlaceTypeFormValues,

  steps: placeTypeSteps,

  draftEntity: DraftEntity.PlaceType,

  messages: {
    create: "Place type created",

    update: "Place type updated",
  },

  redirectDefault: "/location/place-type",
};