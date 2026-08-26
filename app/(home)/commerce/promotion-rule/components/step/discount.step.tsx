"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { PromotionRuleFormSchema } from "../form/schema";

import { PriceCalculationType } from "@/types/common/enums";

export default function DiscountStep() {
  return (
    <FormSection
      title="Discount"
      description="Configure the discount type and value for this promotion rule"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<PromotionRuleFormSchema>
          name="discountType"
          label="Discount Type"
          placeholder="Select discount type..."
          options={Object.values(PriceCalculationType).map((type) => ({
            value: type,
            label: type,
          }))}
        />

        <FormInput<PromotionRuleFormSchema>
          name="value"
          label="Value"
          type="number"
          placeholder="0"
        />

        <FormInput<PromotionRuleFormSchema>
          name="maxDiscount"
          label="Maximum Discount"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
