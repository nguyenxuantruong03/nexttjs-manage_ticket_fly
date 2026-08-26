import { ExtraFormSchema } from "./schema";

import { extraDefaultValues } from "./default-values";

import { Extra } from "@/types/common/commerce/extra/extra.type";

export function initExtraFormValues(
  extra?: Extra,
): ExtraFormSchema {
  if (!extra) {
    return structuredClone(extraDefaultValues);
  }

  return structuredClone(extra);
}