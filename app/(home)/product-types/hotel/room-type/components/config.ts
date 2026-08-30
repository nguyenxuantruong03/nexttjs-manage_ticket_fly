"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { RoomTypeSchema, RoomTypeFormSchema } from "./form/schema";

import { roomTypeDefaultValues } from "./form/default-values";

import { initRoomTypeFormValues } from "./form/init-value";

import { roomTypeSteps } from "./step/steps";

import { HotelRoomType } from "@/types/product-types/hotel/room/room-type.types";

export const roomTypeFormConfig: EntityFormWizardConfig<
  RoomTypeFormSchema,
  HotelRoomType
> = {
  schema: RoomTypeSchema,

  defaultValues: roomTypeDefaultValues,

  initValues: initRoomTypeFormValues,

  steps: roomTypeSteps,

  draftEntity: DraftEntity.HotelRoomType,

  messages: {
    create: "RoomType created",

    update: "RoomType updated",
  },

  redirectDefault: "hotel/room-type",
};
