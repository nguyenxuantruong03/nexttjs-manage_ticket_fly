"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { MealPlanFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Meal Plan"
      description="Basic meal plan information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MealPlanFormSchema>
          name="name"
          label="Name"
          placeholder="Breakfast Included"
        />

        <FormInput<MealPlanFormSchema>
          name="description"
          label="Description"
          placeholder="Includes daily breakfast for all guests"
        />

        <FormIcon<MealPlanFormSchema>
          name="icon"
          label="Icon"
          placeholder="utensils-crossed"
        />
      </div>
    </FormSection>
  );
}