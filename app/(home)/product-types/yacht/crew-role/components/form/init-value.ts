import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

import { yachtCrewRoleDefaultValues } from "./default-values";

import { YachtCrewRoleFormSchema } from "./schema";

export function initYachtCrewRoleFormValues(
  yachtCrewRole?: YachtCrewRole,
): YachtCrewRoleFormSchema {
  if (!yachtCrewRole) {
    return structuredClone(yachtCrewRoleDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: yachtCrewRole.name ?? "",

    description: yachtCrewRole.description ?? null,

    icon: yachtCrewRole.icon ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: yachtCrewRole.sortOrder ?? 0,

    active: yachtCrewRole.active ?? true,
  };
}
