"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyMealTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly meal type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyMealTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Vegetarian"
        />

        <FormIcon<FlyMealTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyMealTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly meal type"
          />
        </div>
      </div>
    </FormSection>
  );
}