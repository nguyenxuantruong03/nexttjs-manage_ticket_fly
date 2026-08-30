import { DiningServiceType } from "@/types/product-types/hotel/service/dinner-option.type";

import { diningServiceTypeDefaultValues } from "./default-values";

import { DiningServiceTypeFormSchema } from "./schema";

export function initDiningServiceTypeFormValues(
  diningServiceType?: DiningServiceType,
): DiningServiceTypeFormSchema {
  if (!diningServiceType) {
    return structuredClone(diningServiceTypeDefaultValues);
  }

  return {
    name: diningServiceType.name ?? "",
    description: diningServiceType.description ?? null,
    icon: diningServiceType.icon ?? null,
    active: diningServiceType.active ?? true,
    sortOrder: diningServiceType.sortOrder ?? 0,
  };
}
