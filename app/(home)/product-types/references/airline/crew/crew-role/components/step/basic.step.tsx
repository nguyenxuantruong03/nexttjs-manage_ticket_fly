"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyCrewRoleFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly crew role information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyCrewRoleFormSchema>
          name="name"
          label="Name"
          placeholder="Captain"
        />

        <FormIcon<FlyCrewRoleFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyCrewRoleFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly crew role"
          />
        </div>
      </div>
    </FormSection>
  );
}