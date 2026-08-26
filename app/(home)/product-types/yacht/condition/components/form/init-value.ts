import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";
import { yachtConditionDefaultValues } from "./default-values";
import { YachtConditionFormSchema } from "./schema";

export function initYachtConditionFormValues(
  yachtCondition: YachtCondition,
): YachtConditionFormSchema {
  if (!yachtCondition) {
    return structuredClone(yachtConditionDefaultValues);
  }

  return structuredClone(yachtCondition);
}