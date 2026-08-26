"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { ExtraTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Extra Type" description="Basic extra type information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ExtraTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Breakfast"
        />

        <FormInput<ExtraTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<ExtraTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the extra type..."
          />
        </div>
      </div>
    </FormSection>
  );
}
