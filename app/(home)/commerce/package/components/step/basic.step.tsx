"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import { PackageFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Package"
      description="Basic package information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="name"
          label="Name"
          placeholder="Premium Package"
        />

        <div className="md:col-span-2">
          <FormTextarea<PackageFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the package..."
          />
        </div>
      </div>
    </FormSection>
  );
}