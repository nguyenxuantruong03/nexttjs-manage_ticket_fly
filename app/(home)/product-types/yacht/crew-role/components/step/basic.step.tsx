"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { YachtCrewRoleFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Yacht Crew Role"
      description="Basic yacht crew role information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<YachtCrewRoleFormSchema>
          name="name"
          label="Name"
          placeholder="Captain"
        />

        <FormInput<YachtCrewRoleFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <FormInput<YachtCrewRoleFormSchema>
          name="description"
          label="Description"
          placeholder="Describe the yacht crew role"
        />
      </div>
    </FormSection>
  );
}