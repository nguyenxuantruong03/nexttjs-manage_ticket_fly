import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";
import { yachtCrewRoleDefaultValues } from "./default-values";
import { YachtCrewRoleFormSchema } from "./schema";

export function initYachtCrewRoleFormValues(
  yachtCrewRole: YachtCrewRole,
): YachtCrewRoleFormSchema {
  if (!yachtCrewRole) {
    return structuredClone(yachtCrewRoleDefaultValues);
  }

  return structuredClone(yachtCrewRole);
}