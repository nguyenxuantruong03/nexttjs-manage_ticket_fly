"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { PromotionFormSchema } from "../form/schema";
import { PromotionStatus } from "@/types/common/commerce/promotion/promotion";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Promotion status configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PromotionFormSchema>
          name="status"
          label="Status"
          placeholder={PromotionStatus.draft}
        />
      </div>
    </FormSection>
  );
}