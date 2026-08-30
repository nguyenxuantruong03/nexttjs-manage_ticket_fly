"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { BedType } from "@/types/product-types/hotel/room/room.types";

import { BedTypeSchema, BedTypeFormSchema } from "./form/schema";

import { bedTypeDefaultValues } from "./form/default-values";

import { initBedTypeFormValues } from "./form/init-value";

import { bedTypeSteps } from "./step/steps";

export const bedTypeFormConfig: EntityFormWizardConfig<
  BedTypeFormSchema,
  BedType
> = {
  schema: BedTypeSchema,

  defaultValues: bedTypeDefaultValues,

  initValues: initBedTypeFormValues,

  steps: bedTypeSteps,

  draftEntity: DraftEntity.HotelBedType,

  messages: {
    create: "BedType created",
    update: "BedType updated",
  },

  redirectDefault: "hotel/bed-type",
};