import { FlyCrewDutyFormSchema } from "./schema";
import { flyCrewDutyDefaultValues } from "./default-values";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

export function initFlyCrewDutyFormValues(
  flyCrewDuty: FlyCrewDuty,
): FlyCrewDutyFormSchema {
  if (!flyCrewDuty) {
    return structuredClone(flyCrewDutyDefaultValues);
  }

  return structuredClone(flyCrewDuty);
}
