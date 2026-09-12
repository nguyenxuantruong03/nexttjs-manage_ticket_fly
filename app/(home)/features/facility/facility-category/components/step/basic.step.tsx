"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { FacilityCategoryFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Facility Category"
      description="Basic facility category information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FacilityCategoryFormSchema>
          name="name"
          label="Name"
          placeholder="Accommodation"
        />

        <FormIcon<FacilityCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<FacilityCategoryFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the facility category..."
          />
        </div>
      </div>
    </FormSection>
  );
}