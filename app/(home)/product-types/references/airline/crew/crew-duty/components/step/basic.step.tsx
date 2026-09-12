"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyCrewDutyFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly crew duty information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyCrewDutyFormSchema>
          name="name"
          label="Name"
          placeholder="Captain"
        />

        <FormIcon<FlyCrewDutyFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyCrewDutyFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly crew duty"
          />
        </div>
      </div>
    </FormSection>
  );
}
