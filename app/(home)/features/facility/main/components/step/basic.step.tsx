"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { FacilityFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Facility"
      description="Basic facility information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FacilityFormSchema>
          name="name"
          label="Name"
          placeholder="Swimming Pool"
        />

        <FormIcon<FacilityFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<FacilityFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the facility..."
          />
        </div>
      </div>
    </FormSection>
  );
}