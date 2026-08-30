import { ExtraFormSchema } from "./schema";

import { extraDefaultValues } from "./default-values";

import { Extra } from "@/types/common/commerce/extra/extra.type";

export function initExtraFormValues(extra?: Extra): ExtraFormSchema {
  if (!extra) {
    return structuredClone(extraDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: extra.name ?? "",
    description: extra.description ?? null,
    icon: extra.icon ?? null,

    bookingTypeIds:
      extra.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    typeId: extra.typeId ?? "",

    // ======================================================
    // PRICING
    // ======================================================

    price: extra.price ?? 0,
    currencyId: extra.currencyId ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    active: extra.active ?? true,
    sortOrder: extra.sortOrder ?? 0,
  };
}
