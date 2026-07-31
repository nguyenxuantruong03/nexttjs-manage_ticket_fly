import { Sustainability } from "@/types/bookings/hotel/hotel-detail.type";
import { sustainabilityDefaultValues } from "./default-values";
import { SustainabilityFormSchema } from "./schema";

export function initSustainabilityFormValues(
  sustainability: Sustainability,
): SustainabilityFormSchema {
  if (!sustainability) {
    return structuredClone(sustainabilityDefaultValues);
  }

  return structuredClone(sustainability);
}
