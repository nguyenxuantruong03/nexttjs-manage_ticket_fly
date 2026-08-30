"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { HotelSchema, HotelSchemaForm } from "./form/schema/core/hotel.schema";

import { hotelDefaultValues } from "./form/default-values";

import { hotelSteps } from "./step/steps";

import { Hotel } from "@/types/product-types/hotel/core/hotel.types";
import { initHotelFormValues } from "./form/init-values";

export const hotelFormConfig: EntityFormWizardConfig<HotelSchemaForm, Hotel> = {
  schema: HotelSchema,

  defaultValues: hotelDefaultValues,

  initValues: initHotelFormValues,

  steps: hotelSteps,

  draftEntity: DraftEntity.Hotel,

  messages: {
    create: "Hotel created",

    update: "Hotel updated",
  },

  redirectDefault: "/hotel",
};
