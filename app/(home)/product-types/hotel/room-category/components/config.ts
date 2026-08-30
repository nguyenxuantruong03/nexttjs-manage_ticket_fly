"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { RoomCategorySchema, RoomCategoryFormSchema } from "./form/schema";

import { roomCategoryDefaultValues } from "./form/default-values";

import { initRoomCategoryFormValues } from "./form/init-value";

import { roomCategorySteps } from "./step/steps";

import { RoomCategory } from "@/types/product-types/hotel/room/room.types";

export const roomCategoryFormConfig: EntityFormWizardConfig<
  RoomCategoryFormSchema,
  RoomCategory
> = {
  schema: RoomCategorySchema,

  defaultValues: roomCategoryDefaultValues,

  initValues: initRoomCategoryFormValues,

  steps: roomCategorySteps,

  draftEntity: DraftEntity.HotelRoomCategory,

  messages: {
    create: "RoomCategory created",

    update: "RoomCategory updated",
  },

  redirectDefault: "hotel/room-category",
};