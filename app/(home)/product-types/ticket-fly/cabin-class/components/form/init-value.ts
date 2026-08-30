import { FlyCabinClassFormSchema } from "./schema";

import { flyCabinClassDefaultValues } from "./default-values";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

export function initFlyCabinClassFormValues(
  flyCabinClass?: FlyCabinClass,
): FlyCabinClassFormSchema {
  if (!flyCabinClass) {
    return structuredClone(flyCabinClassDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyCabinClass.name ?? "",

    description: flyCabinClass.description ?? "",

    icon: flyCabinClass.icon ?? "",

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: flyCabinClass.sortOrder ?? 0,

    active: flyCabinClass.active ?? true,
  };
}
