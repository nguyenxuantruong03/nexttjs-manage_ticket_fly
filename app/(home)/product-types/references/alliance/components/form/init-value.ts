import { FlyAllianceFormSchema } from "./schema";

import { flyAllianceDefaultValues } from "./default-values";
import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

export function initFlyAllianceFormValues(
  flyAlliance: FlyAlliance,
): FlyAllianceFormSchema {
  if (!flyAlliance) {
    return structuredClone(flyAllianceDefaultValues);
  }

  return structuredClone(flyAlliance);
}
