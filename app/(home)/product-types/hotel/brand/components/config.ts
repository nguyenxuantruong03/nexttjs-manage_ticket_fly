"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

import { BrandSchema, BrandFormSchema } from "./form/schema";

import { brandDefaultValues } from "./form/default-values";

import { initHotelBrandFormValues } from "./form/init-value";

import { hotelBrandSteps } from "./step/steps";

export const hotelBrandFormConfig: EntityFormWizardConfig<
  BrandFormSchema,
  HotelBrand
> = {
  schema: BrandSchema,

  defaultValues: brandDefaultValues,

  initValues: initHotelBrandFormValues,

  steps: hotelBrandSteps,

  draftEntity: DraftEntity.HotelBrand,

  messages: {
    create: "HotelBrand created",
    update: "HotelBrand updated",
  },

  redirectDefault: "hotel/brand",
};
