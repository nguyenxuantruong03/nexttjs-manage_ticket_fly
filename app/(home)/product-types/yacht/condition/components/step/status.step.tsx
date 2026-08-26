"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { YachtConditionFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Yacht condition configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<YachtConditionFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<YachtConditionFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}