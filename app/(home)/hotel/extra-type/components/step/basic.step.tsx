"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { ExtraTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Extra Type"
      description="Basic extra type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ExtraTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Airport Transfer"
        />

        <FormInput<ExtraTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Additional service category available for booking"
        />

        <FormInput<ExtraTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="plane"
        />
      </div>
    </FormSection>
  );
}