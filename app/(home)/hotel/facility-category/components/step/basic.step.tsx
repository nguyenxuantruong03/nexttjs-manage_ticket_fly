"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FacilityCategoryFormSchema } from "../form/schema";

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
          placeholder="Wellness & Spa"
        />

        <FormInput<FacilityCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Facilities related to wellness, fitness, and relaxation"
        />

        <FormInput<FacilityCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="spa"
        />
      </div>
    </FormSection>
  );
}
