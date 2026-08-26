"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { ContinentFormSchema } from "../form/schema";

export default function DisplayStep() {
  return (
    <FormSection title="Display" description="Continent display settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ContinentFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
