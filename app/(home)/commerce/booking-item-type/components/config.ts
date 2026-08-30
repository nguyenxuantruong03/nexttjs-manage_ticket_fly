import { DraftEntity } from "@/components/daft/draft-config";

import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

import { BookingItemTypeFormSchema, schema } from "./form/schema";

import { bookingItemTypeDefaultValues } from "./form/default-values";

import { initBookingItemTypeFormValues } from "./form/init-value";

import { bookingItemTypeSteps } from "./step/steps";

export const bookingItemTypeFormConfig: EntityFormWizardConfig<
  BookingItemTypeFormSchema,
  BookingItemType
> = {
  schema,

  defaultValues: bookingItemTypeDefaultValues,

  initValues: initBookingItemTypeFormValues,

  steps: bookingItemTypeSteps,

  draftEntity: DraftEntity.BookingItemType,

  messages: {
    create: "Booking item type created",

    update: "Booking item type updated",
  },

  redirectDefault: "/commerce/booking-item-type",
};
