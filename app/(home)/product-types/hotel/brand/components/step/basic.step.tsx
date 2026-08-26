"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BrandFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Hotel Brand"
      description="Basic hotel brand information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BrandFormSchema>
          name="name"
          label="Name"
          placeholder="Marriott International"
        />

        <FormInput<BrandFormSchema>
          name="description"
          label="Description"
          placeholder="Global hotel brand information"
        />

        <FormInput<BrandFormSchema>
          name="logo"
          label="Logo"
          placeholder="https://example.com/logo.png"
        />
      </div>
    </FormSection>
  );
}
