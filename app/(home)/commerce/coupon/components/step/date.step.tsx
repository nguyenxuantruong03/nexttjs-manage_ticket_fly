"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { CouponFormSchema } from "../form/schema";

export default function DateStep() {
  return (
    <FormSection
      title="Date"
      description="Configure the coupon validity period"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CouponFormSchema>
          name="startDate"
          label="Start Date"
          type="datetime-local"
        />

        <FormInput<CouponFormSchema>
          name="endDate"
          label="End Date"
          type="datetime-local"
        />
      </div>
    </FormSection>
  );
}