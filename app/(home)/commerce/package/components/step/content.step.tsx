"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PackageFormSchema } from "../form/schema";

export default function ContentStep() {
  return (
    <FormSection
      title="Content"
      description="Configure the items included in this package"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="includedItems"
          label="Included Items"
          placeholder="Breakfast, Airport transfer, Free WiFi"
        />
      </div>
    </FormSection>
  );
}
