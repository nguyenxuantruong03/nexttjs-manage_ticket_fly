"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { MealPlanFormSchema } from "../form/schema";

export default function SettingsStep() {
  return (
    <FormSection title="Settings" description="Configure meal plan settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<MealPlanFormSchema>
          name="active"
          label="Active"
          description="Enable this meal plan for use."
        />

        <FormInput<MealPlanFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
