"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PlaceTypeFormSchema } from "../form/schema";

export default function DisplayStep() {
  return (
    <FormSection title="Display" description="Place type display settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PlaceTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          placeholder="0"
          type="number"
        />
      </div>
    </FormSection>
  );
}
