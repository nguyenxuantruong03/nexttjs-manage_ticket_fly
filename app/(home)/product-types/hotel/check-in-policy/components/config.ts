"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  HotelCheckInPolicySchema,
  HotelCheckInPolicySchemaForm,
} from "./form/schema";

import { hotelCheckInPolicyDefaultValues } from "./form/default-values";

import { initHotelCheckInPolicyFormValues } from "./form/init-value";

import { hotelCheckInPolicySteps } from "./step/steps";

import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

export const hotelCheckInPolicyFormConfig: EntityFormWizardConfig<
  HotelCheckInPolicySchemaForm,
  HotelCheckInPolicy
> = {
  schema: HotelCheckInPolicySchema,

  defaultValues: hotelCheckInPolicyDefaultValues,

  initValues: initHotelCheckInPolicyFormValues,

  steps: hotelCheckInPolicySteps,

  draftEntity: DraftEntity.HotelCheckInPolicy,

  messages: {
    create: "Check-in policy created",
    update: "Check-in policy updated",
  },

  redirectDefault: "/hotel/check-in-policy",
};