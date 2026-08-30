import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

import { busSeatTypeDefaultValues } from "./default-values";

import { BusSeatTypeFormSchema } from "./schema";

export function initBusSeatTypeFormValues(
  busSeatType?: BusSeatType,
): BusSeatTypeFormSchema {
  if (!busSeatType) {
    return structuredClone(busSeatTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: busSeatType.name ?? "",

    description: busSeatType.description ?? null,

    icon: busSeatType.icon ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: busSeatType.sortOrder ?? 0,

    active: busSeatType.active ?? true,
  };
}