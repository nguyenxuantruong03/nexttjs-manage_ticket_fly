import { BathroomType } from "@/types/product-types/hotel/room/room.types";

import { bathroomTypeDefaultValues } from "./default-values";

import { BathroomTypeFormSchema } from "./schema";

export function initBathroomTypeFormValues(
  bathroomType?: BathroomType,
): BathroomTypeFormSchema {
  if (!bathroomType) {
    return structuredClone(bathroomTypeDefaultValues);
  }

  return {
    name: bathroomType.name ?? "",
    description: bathroomType.description ?? null,
    icon: bathroomType.icon ?? null,
    active: bathroomType.active ?? true,
    sortOrder: bathroomType.sortOrder ?? 0,
  };
}
