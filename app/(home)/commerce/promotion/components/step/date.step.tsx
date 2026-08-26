"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { PromotionFormSchema } from "../form/schema";

export default function DateStep() {
  return (
    <FormSection
      title="Date"
      description="Configure the promotion validity period"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="startDate"
          label="Start Date"
          type="datetime-local"
        />

        <FormInput<PromotionFormSchema>
          name="endDate"
          label="End Date"
          type="datetime-local"
        />
      </div>
    </FormSection>
  );
}
