import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

import { accessibilityDefaultValues } from "./default-values";

import { AccessibilityFormSchema } from "./schema";

export function initAccessibilityFormValues(
  accessibility?: Accessibility,
): AccessibilityFormSchema {
  if (!accessibility) {
    return structuredClone(accessibilityDefaultValues);
  }

  return {
    name: accessibility.name ?? "",
    description: accessibility.description ?? null,
  };
}
