import { FlyDelayReasonFormSchema } from "./schema";
import { flyDelayReasonDefaultValues } from "./default-values";
import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

export function initFlyDelayReasonFormValues(
  flyDelayReason: FlyDelayReason,
): FlyDelayReasonFormSchema {
  if (!flyDelayReason) {
    return structuredClone(flyDelayReasonDefaultValues);
  }

  return structuredClone(flyDelayReason);
}