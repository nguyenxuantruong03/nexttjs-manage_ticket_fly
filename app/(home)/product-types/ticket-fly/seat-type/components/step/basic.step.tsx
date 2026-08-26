"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlySeatTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly seat type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlySeatTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Economy"
        />

        <FormInput<FlySeatTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlySeatTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly seat type"
          />
        </div>
      </div>
    </FormSection>
  );
}