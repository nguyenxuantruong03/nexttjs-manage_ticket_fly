import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";
import { DraftEntity } from "@/components/daft/draft-config";

import { HotelSchema, HotelSchemaForm } from "./form/schema/core/hotel.schema";

import { hotelDefaultValues } from "./form/default-values";
import { hotelSteps } from "./step/steps";
import { initHotelFormValues } from "./form/init-values";

import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelService } from "@/services/product-types/hotel/client";

// ======================================================
// API INPUT TYPES
// ======================================================

export type HotelCreateInput = Parameters<typeof HotelService.create>[0];

export type HotelUpdateInput = Parameters<typeof HotelService.update>[1];

// ======================================================
// FORM CONFIG
// ======================================================

export const hotelFormConfig: EntityFormWizardConfig<
  HotelSchemaForm,
  Hotel,
  HotelCreateInput,
  HotelUpdateInput
> = {
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
