import { FlyAddonTypeFormSchema } from "./schema";

import { flyAddonTypeDefaultValues } from "./default-values";

import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

export function initFlyAddonTypeFormValues(
  flyAddonType?: FlyAddonType,
): FlyAddonTypeFormSchema {
  if (!flyAddonType) {
    return structuredClone(flyAddonTypeDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyAddonType.name ?? "",

    description: flyAddonType.description ?? "",

    icon: flyAddonType.icon ?? "",

    sortOrder: flyAddonType.sortOrder ?? 0,

    active: flyAddonType.active ?? true,

    // ======================================================
    // ADDONS
    // ======================================================

    addons: flyAddonType.addons ?? [],
  };
}
