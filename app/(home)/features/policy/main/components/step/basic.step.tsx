"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import { PolicyFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection title="Policy" description="Basic policy information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PolicyFormSchema>
          name="name"
          label="Name"
          placeholder="Cancellation Policy"
        />

        <FormIcon<PolicyFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<PolicyFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the policy..."
          />
        </div>
      </div>
    </FormSection>
  );
}
