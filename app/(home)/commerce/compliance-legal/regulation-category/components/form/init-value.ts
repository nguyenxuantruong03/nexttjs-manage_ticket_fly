import { RegulationCategoryFormSchema } from "./schema";

import { regulationCategoryDefaultValues } from "./default-values";
import { RegulationCategory } from "@/types/common/commerce/compliance-legal.type";

export function initRegulationCategoryFormValues(
  regulationCategory?: RegulationCategory,
): RegulationCategoryFormSchema {
  if (!regulationCategory) {
    return structuredClone(regulationCategoryDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    code: regulationCategory.code ?? "",

    name: regulationCategory.name ?? "",

    description: regulationCategory.description ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    isActive: regulationCategory.isActive ?? true,
  };
}
