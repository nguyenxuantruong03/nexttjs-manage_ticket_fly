import { EntityFormWizardConfig } from "@/components/form/wizard/EntityFormWizard";

import { DraftEntity } from "@/components/daft/draft-config";

import {
  AccessibilitySchema,
  AccessibilityFormSchema,
} from "./form/schema";

import { accessibilityDefaultValues } from "./form/default-values";

import { initAccessibilityFormValues } from "./form/init-value";

import { accessibilitySteps } from "./step/steps";

import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

export const accessibilityFormConfig: EntityFormWizardConfig<
  AccessibilityFormSchema,
  Accessibility
> = {
  schema: AccessibilitySchema,

  defaultValues: accessibilityDefaultValues,

  initValues: initAccessibilityFormValues,

  steps: accessibilitySteps,

  draftEntity: DraftEntity.HotelAccessibility,

  messages: {
    create: "Accessibility created",
    update: "Accessibility updated",
  },

  redirectDefault: "hotel/accessibility",
};