import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { BathroomTypeSchema, BathroomTypeFormSchema } from "./form/schema";

import { bathroomTypeDefaultValues } from "./form/default-values";

import { initBathroomTypeFormValues } from "./form/init-value";

import { bathroomTypeSteps } from "./step/steps";

import { BathroomType } from "@/types/product-types/hotel/room/room.types";

export const bathroomTypeFormConfig: EntityFormWizardConfig<
  BathroomTypeFormSchema,
  BathroomType
> = {
  schema: BathroomTypeSchema,

  defaultValues: bathroomTypeDefaultValues,

  initValues: initBathroomTypeFormValues,

  steps: bathroomTypeSteps,

  draftEntity: DraftEntity.HotelBathroomType,

  messages: {
    create: "BathroomType created",
    update: "BathroomType updated",
  },

  redirectDefault: "hotel/bathroom-type",
};
