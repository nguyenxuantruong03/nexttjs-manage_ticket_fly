"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { AccessibilityFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Accessibility"
      description="Basic accessibility information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<AccessibilityFormSchema>
          name="name"
          label="Name"
          placeholder="Wheelchair Accessible"
        />

        <FormInput<AccessibilityFormSchema>
          name="description"
          label="Description"
          placeholder="Suitable for wheelchair users"
        />
      </div>
    </FormSection>
  );
}
