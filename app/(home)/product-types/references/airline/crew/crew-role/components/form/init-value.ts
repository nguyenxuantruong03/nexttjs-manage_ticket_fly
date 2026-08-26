import { FlyCrewRoleFormSchema } from "./schema";

import { flyCrewRoleDefaultValues } from "./default-values";
import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";


export function initFlyCrewRoleFormValues(
  flyCrewRole: FlyCrewRole,
): FlyCrewRoleFormSchema {
  if (!flyCrewRole) {
    return structuredClone(flyCrewRoleDefaultValues);
  }

  return structuredClone(flyCrewRole);
}