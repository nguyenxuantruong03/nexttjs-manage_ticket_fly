import { Sustainability } from "@/types/product-types/hotel/hotel-detail";
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
