"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { PackageFormSchema } from "../form/schema";

import { PackageDurationType } from "@/types/common/commerce/package/package.type";

export default function DurationStep() {
  const durationTypeOptions = Object.values(PackageDurationType).map(
    (durationType) => ({
      label: durationType,
      value: durationType,
    }),
  );

  return (
    <FormSection
      title="Duration"
      description="Configure the duration of this package"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PackageFormSchema>
          name="duration"
          label="Duration"
          type="number"
          placeholder="1"
        />

        <FormSelect<PackageFormSchema>
          name="durationType"
          label="Duration Type"
          placeholder="Select duration type"
          options={durationTypeOptions}
        />
      </div>
    </FormSection>
  );
}
