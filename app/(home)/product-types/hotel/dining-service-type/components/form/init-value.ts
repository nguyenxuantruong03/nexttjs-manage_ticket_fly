import { DiningServiceType } from "@/types/product-types/hotel/service/dinner-option.type";
import { diningServiceTypeDefaultValues } from "./default-values";
import { DiningServiceTypeFormSchema } from "./schema";

export function initDiningServiceTypeFormValues(
  diningServiceType: DiningServiceType,
): DiningServiceTypeFormSchema {
  if (!diningServiceType) {
    return structuredClone(diningServiceTypeDefaultValues);
  }

  return structuredClone(diningServiceType);
}
