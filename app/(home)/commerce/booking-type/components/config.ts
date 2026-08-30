import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { BookingType } from "@/types/common/commerce/booking-type";

import { BookingTypeFormSchema, schema } from "./form/schema";

import { bookingTypeDefaultValues } from "./form/default-values";

import { initBookingTypeFormValues } from "./form/init-value";

import { bookingTypeSteps } from "./step/steps";

export const bookingTypeFormConfig: EntityFormWizardConfig<
  BookingTypeFormSchema,
  BookingType
> = {
  schema,

  defaultValues: bookingTypeDefaultValues,

  initValues: initBookingTypeFormValues,

  steps: bookingTypeSteps,

  draftEntity: DraftEntity.BookingType,

  messages: {
    create: "Booking type created",

    update: "Booking type updated",
  },

  redirectDefault: "/features/booking-type",
};
