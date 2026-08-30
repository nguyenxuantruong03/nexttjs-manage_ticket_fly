import { ExtraTypeFormSchema } from "./schema";

import { extraTypeDefaultValues } from "./default-values";

import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

export function initExtraTypeFormValues(
  extraType?: ExtraType,
): ExtraTypeFormSchema {
  if (!extraType) {
    return structuredClone(extraTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: extraType.name ?? "",
    description: extraType.description ?? null,
    icon: extraType.icon ?? null,

    bookingTypeIds:
      extraType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: extraType.active ?? true,
    sortOrder: extraType.sortOrder ?? 0,
  };
}
