import { FlySeatTypeFormSchema } from "./schema";

import { flySeatTypeDefaultValues } from "./default-values";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

export function initFlySeatTypeFormValues(
  flySeatType?: FlySeatType,
): FlySeatTypeFormSchema {
  if (!flySeatType) {
    return structuredClone(flySeatTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flySeatType.name ?? "",

    description: flySeatType.description ?? "",

    icon: flySeatType.icon ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: flySeatType.sortOrder ?? 0,

    active: flySeatType.active ?? true,
  };
}