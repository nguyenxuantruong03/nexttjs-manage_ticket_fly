"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { PolicyTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Policy Type"
      description="Basic policy type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PolicyTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Cancellation Policy"
        />

        <FormInput<PolicyTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Policies related to cancellations and refunds"
        />

        <FormInput<PolicyTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="shield"
        />
      </div>
    </FormSection>
  );
}