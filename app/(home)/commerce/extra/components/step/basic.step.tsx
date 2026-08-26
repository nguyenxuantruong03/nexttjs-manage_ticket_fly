"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import { ExtraFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Extra"
      description="Basic extra information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ExtraFormSchema>
          name="name"
          label="Name"
          placeholder="Breakfast"
        />

        <FormInput<ExtraFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<ExtraFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the extra..."
          />
        </div>
      </div>
    </FormSection>
  );
}