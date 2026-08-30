"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { StarRatingSchema, StarRatingFormSchema } from "./form/schema";

import { starRatingDefaultValues } from "./form/default-values";

import { initStarRatingFormValues } from "./form/init-value";

import { starRatingSteps } from "./step/steps";

import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

export const starRatingFormConfig: EntityFormWizardConfig<
  StarRatingFormSchema,
  HotelStarRating
> = {
  schema: StarRatingSchema,

  defaultValues: starRatingDefaultValues,

  initValues: initStarRatingFormValues,

  steps: starRatingSteps,

  draftEntity: DraftEntity.HotelStarRating,

  messages: {
    create: "StarRating created",

    update: "StarRating updated",
  },

  redirectDefault: "hotel/star-rating",
};
