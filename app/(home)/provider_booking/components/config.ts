"use client";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import { ProviderBookingFormSchema, schema } from "./form/schema";

import { providerBookingDefaultValues } from "./form/default-values";

import { initProviderBookingFormValues } from "./form/init-value";

import { providerBookingSteps } from "./steps/steps";

import { ProviderBooking } from "@/types/users/provider-bookings";

export const providerBookingFormConfig: EntityFormWizardConfig<
  ProviderBookingFormSchema,
  ProviderBooking
> = {
  schema,

  defaultValues: providerBookingDefaultValues,

  initValues: initProviderBookingFormValues,

  steps: providerBookingSteps,

  draftEntity: DraftEntity.ProviderBooking,

  messages: {
    create: "Provider created",

    update: "Provider updated",
  },

  redirectDefault: "/provider_booking",
};
