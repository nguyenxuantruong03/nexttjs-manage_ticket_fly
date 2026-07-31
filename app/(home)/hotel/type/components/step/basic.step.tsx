"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { TypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Hotel Type" description="Basic hotel type information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TypeFormSchema>
          name="name"
          label="Name"
          placeholder="Resort"
        />

        <FormInput<TypeFormSchema>
          name="description"
          label="Description"
          placeholder="A hotel offering leisure facilities and vacation experiences"
        />

        <FormInput<TypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="building-2"
        />
      </div>
    </FormSection>
  );
}
