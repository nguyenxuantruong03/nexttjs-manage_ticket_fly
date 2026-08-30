import { FlyCrewDutyFormSchema } from "./schema";

import { flyCrewDutyDefaultValues } from "./default-values";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

export function initFlyCrewDutyFormValues(
  flyCrewDuty?: FlyCrewDuty,
): FlyCrewDutyFormSchema {
  if (!flyCrewDuty) {
    return structuredClone(flyCrewDutyDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyCrewDuty.name ?? "",

    description: flyCrewDuty.description ?? undefined,

    icon: flyCrewDuty.icon ?? undefined,

    sortOrder: flyCrewDuty.sortOrder ?? 0,

    active: flyCrewDuty.active ?? true,
  };
}
