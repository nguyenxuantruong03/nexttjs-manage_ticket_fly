"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { DiningMealTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Dining Meal Type"
      description="Basic dining meal type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<DiningMealTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Breakfast"
        />

        <FormInput<DiningMealTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Morning meal served to guests"
        />

        <FormIcon<DiningMealTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="utensils"
        />
      </div>
    </FormSection>
  );
}