"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { PromotionFormSchema } from "../form/schema";

export default function UsageStep() {
  return (
    <FormSection title="Usage" description="Configure promotion usage limits">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="usageLimit"
          label="Usage Limit"
          type="number"
          placeholder="Unlimited"
        />

        <FormInput<PromotionFormSchema>
          name="usedCount"
          label="Used Count"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
