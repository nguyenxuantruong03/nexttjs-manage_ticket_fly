"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { PackageFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Package status configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<PackageFormSchema> name="active" label="Active" />

        <FormInput<PackageFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
