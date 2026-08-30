"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { RoomViewSchema, RoomViewFormSchema } from "./form/schema";

import { roomViewDefaultValues } from "./form/default-values";

import { initRoomViewFormValues } from "./form/init-value";

import { roomViewSteps } from "./step/steps";

import { RoomView } from "@/types/product-types/hotel/room/room.types";

export const roomViewFormConfig: EntityFormWizardConfig<
  RoomViewFormSchema,
  RoomView
> = {
  schema: RoomViewSchema,

  defaultValues: roomViewDefaultValues,

  initValues: initRoomViewFormValues,

  steps: roomViewSteps,

  draftEntity: DraftEntity.HotelRoomView,

  messages: {
    create: "RoomView created",

    update: "RoomView updated",
  },

  redirectDefault: "hotel/room-view",
};