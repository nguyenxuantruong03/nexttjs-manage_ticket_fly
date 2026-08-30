import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

import { yachtConditionDefaultValues } from "./default-values";

import { YachtConditionFormSchema } from "./schema";

export function initYachtConditionFormValues(
  yachtCondition?: YachtCondition,
): YachtConditionFormSchema {
  if (!yachtCondition) {
    return structuredClone(yachtConditionDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    name: yachtCondition.name ?? "",

    description: yachtCondition.description ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    sortOrder: yachtCondition.sortOrder ?? 0,

    active: yachtCondition.active ?? true,
  };
}
