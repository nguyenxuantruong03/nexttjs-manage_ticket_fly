import { RegulationFormSchema } from "./schema";

import { regulationDefaultValues } from "./default-values";
import { Regulation } from "@/types/common/commerce/compliance-legal.type";

export function initRegulationFormValues(
  regulation?: Regulation,
): RegulationFormSchema {
  if (!regulation) {
    return structuredClone(regulationDefaultValues);
  }

  return {
    // ======================================================
    // BASIC
    // ======================================================

    code: regulation.code ?? "",

    version: regulation.version ?? 1,

    title: regulation.title ?? "",

    content: regulation.content ?? "",

    // ======================================================
    // CATEGORY
    // ======================================================

    categoryId: regulation.categoryId ?? "",

    // ======================================================
    // EFFECTIVE PERIOD
    // ======================================================

    effectiveFrom: regulation.effectiveFrom ?? new Date(),

    effectiveTo: regulation.effectiveTo ?? null,

    // ======================================================
    // STATUS
    // ======================================================

    isActive: regulation.isActive ?? true,
  };
}
