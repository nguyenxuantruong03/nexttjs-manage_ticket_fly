"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PromotionRuleFormSchema } from "../form/schema";

export default function AmountStep() {
  return (
    <FormSection
      title="Amount"
      description="Configure the minimum and maximum amount for this promotion rule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PromotionRuleFormSchema>
          name="minimumAmount"
          label="Minimum Amount"
          type="number"
          placeholder="0"
        />

        <FormInput<PromotionRuleFormSchema>
          name="maximumAmount"
          label="Maximum Amount"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
