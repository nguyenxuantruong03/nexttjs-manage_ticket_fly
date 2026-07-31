import { ExtraType } from "@/types/bookings/hotel/service/extra.type";
import { extraTypeDefaultValues } from "./default-values";
import { ExtraTypeFormSchema } from "./schema";

export function initExtraTypeFormValues(
  extraType: ExtraType,
): ExtraTypeFormSchema {
  if (!extraType) {
    return structuredClone(extraTypeDefaultValues);
  }

  return structuredClone(extraType);
}
