import { FlyCrewRoleFormSchema } from "./schema";

import { flyCrewRoleDefaultValues } from "./default-values";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

export function initFlyCrewRoleFormValues(
  flyCrewRole?: FlyCrewRole,
): FlyCrewRoleFormSchema {
  if (!flyCrewRole) {
    return structuredClone(flyCrewRoleDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: flyCrewRole.name ?? "",

    description: flyCrewRole.description ?? undefined,

    icon: flyCrewRole.icon ?? undefined,

    sortOrder: flyCrewRole.sortOrder ?? 0,

    active: flyCrewRole.active ?? true,
  };
}
