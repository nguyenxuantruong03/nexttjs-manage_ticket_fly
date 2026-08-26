"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyAddonTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly addon type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAddonTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Extra Baggage"
        />

        <FormInput<FlyAddonTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyAddonTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly addon type"
          />
        </div>
      </div>
    </FormSection>
  );
}