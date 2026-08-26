"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { YachtConditionFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Yacht Condition"
      description="Basic yacht condition information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<YachtConditionFormSchema>
          name="name"
          label="Name"
          placeholder="Excellent"
        />

        <FormInput<YachtConditionFormSchema>
          name="description"
          label="Description"
          placeholder="Describe the yacht condition"
        />
      </div>
    </FormSection>
  );
}