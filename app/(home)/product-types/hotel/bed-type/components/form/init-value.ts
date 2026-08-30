import { BedType } from "@/types/product-types/hotel/room/room.types";

import { bedTypeDefaultValues } from "./default-values";

import { BedTypeFormSchema } from "./schema";

export function initBedTypeFormValues(bedType?: BedType): BedTypeFormSchema {
  if (!bedType) {
    return structuredClone(bedTypeDefaultValues);
  }

  return {
    name: bedType.name ?? "",
    description: bedType.description ?? null,
    icon: bedType.icon ?? null,
    active: bedType.active ?? true,
    sortOrder: bedType.sortOrder ?? 0,
  };
}
