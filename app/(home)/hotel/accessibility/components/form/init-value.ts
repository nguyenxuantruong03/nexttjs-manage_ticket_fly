import { Accessibility } from "@/types/bookings/hotel/hotel-detail.type";
import { accessibilityDefaultValues } from "./default-values";
import { AccessibilityFormSchema } from "./schema";

export function initAccessibilityFormValues(
  accessibility: Accessibility,
): AccessibilityFormSchema {
  if (!accessibility) {
    return structuredClone(accessibilityDefaultValues);
  }

  return structuredClone(accessibility);
}
