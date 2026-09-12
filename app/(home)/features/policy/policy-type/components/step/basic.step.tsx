"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import { PolicyTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

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
          placeholder="Cancellation"
        />

        <FormIcon<PolicyTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<PolicyTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the policy type..."
          />
        </div>
      </div>
    </FormSection>
  );
}
