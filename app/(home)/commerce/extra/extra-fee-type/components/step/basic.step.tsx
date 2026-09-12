"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import { ExtraFeeTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Extra Fee Type"
      description="Basic extra fee type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ExtraFeeTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Standard Extra Fee"
        />

        <FormIcon<ExtraFeeTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="tag"
        />

        <div className="md:col-span-2">
          <FormTextarea<ExtraFeeTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the extra fee type..."
          />
        </div>
      </div>
    </FormSection>
  );
}
