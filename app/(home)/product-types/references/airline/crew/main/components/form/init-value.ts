import { FlyCrewFormSchema } from "./schema";

import { flyCrewDefaultValues } from "./default-values";
import { FlyCrew } from "@/types/product-types/references/airline/crew/crew.types";

export function initFlyCrewFormValues(flyCrew: FlyCrew): FlyCrewFormSchema {
  if (!flyCrew) {
    return structuredClone(flyCrewDefaultValues);
  }

  return structuredClone(flyCrew);
}
