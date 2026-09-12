import { TaxRuleFormSchema } from "./schema";

import { taxRuleDefaultValues } from "./default-values";
import { TaxRule } from "@/types/common/commerce/compliance-legal.type";

export function initTaxRuleFormValues(taxRule?: TaxRule): TaxRuleFormSchema {
  if (!taxRule) {
    return structuredClone(taxRuleDefaultValues);
  }

  return {
    // ======================================================
    // COUNTRY
    // ======================================================

    countryId: taxRule.countryId ?? [],

    // ======================================================
    // BOOKING TYPE
    // ======================================================

    bookingTypeIds:
      taxRule.bookingTypes?.map((bookingType) => bookingType.id) ?? [],

    // ======================================================
    // TAX
    // ======================================================

    taxPercent: taxRule.taxPercent ?? 0,

    // ======================================================
    // STATUS
    // ======================================================

    isActive: taxRule.isActive ?? true,

    // ======================================================
    // EFFECTIVE PERIOD
    // ======================================================

    effectiveFrom: taxRule.effectiveFrom ?? new Date(),

    effectiveTo: taxRule.effectiveTo ?? null,
  };
}
