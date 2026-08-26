import { ExtraTypeFormSchema } from "./schema";
import { extraTypeDefaultValues } from "./default-values";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";

export function initExtraTypeFormValues(
  extraType?: ExtraType,
): ExtraTypeFormSchema {
  if (!extraType) {
    return structuredClone(extraTypeDefaultValues);
  }

  return structuredClone(extraType);
}
