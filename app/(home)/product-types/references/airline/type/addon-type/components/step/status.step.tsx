"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { FlyAddonTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly addon type configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlyAddonTypeFormSchema> name="active" label="Active" />

        <FormInput<FlyAddonTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}
