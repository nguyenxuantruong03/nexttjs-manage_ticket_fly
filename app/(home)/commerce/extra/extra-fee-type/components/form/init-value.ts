import { ExtraFeeTypeFormSchema } from "./schema";

import { extraFeeTypeDefaultValues } from "./default-values";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";

export function initExtraFeeTypeFormValues(
  extraFeeType?: ExtraFeeType,
): ExtraFeeTypeFormSchema {
  if (!extraFeeType) {
    return structuredClone(extraFeeTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: extraFeeType.name ?? "",
    description: extraFeeType.description ?? null,
    icon: extraFeeType.icon ?? null,

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      extraFeeType.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // STATUS
    // ======================================================

    active: extraFeeType.active ?? true,
    sortOrder: extraFeeType.sortOrder ?? 0,
  };
}
