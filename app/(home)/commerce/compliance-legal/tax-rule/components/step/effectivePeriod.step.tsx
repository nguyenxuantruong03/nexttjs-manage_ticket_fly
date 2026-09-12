"use client";

import FormSection from "@/components/form/FormSection";

import { FormDatePicker } from "@/components/form/form-data";

import { TaxRuleFormSchema } from "../form/schema";

export default function EffectivePeriodStep() {
  return (
    <FormSection
      title="Effective Period"
      description="Configure the period when this tax rule is effective"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormDatePicker<TaxRuleFormSchema>
          name="effectiveFrom"
          label="Effective From"
        />

        <FormDatePicker<TaxRuleFormSchema>
          name="effectiveTo"
          label="Effective To"
        />
      </div>
    </FormSection>
  );
}