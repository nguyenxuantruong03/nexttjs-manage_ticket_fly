"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { CouponFormSchema } from "../form/schema";

export default function UsageStep() {
  return (
    <FormSection title="Usage" description="Configure coupon usage limits">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CouponFormSchema>
          name="usageLimit"
          label="Usage Limit"
          type="number"
          placeholder="Unlimited"
        />
      </div>
    </FormSection>
  );
}
