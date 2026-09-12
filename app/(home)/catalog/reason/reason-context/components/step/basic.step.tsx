"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { ReasonContextFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Reason Context"
      description="Basic reason context information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ReasonContextFormSchema>
          name="code"
          label="Code"
          placeholder="USER_BAN"
        />

        <FormInput<ReasonContextFormSchema>
          name="name"
          label="Name"
          placeholder="User Ban"
        />

        <FormInput<ReasonContextFormSchema>
          name="description"
          label="Description"
          placeholder="Describe this reason context"
        />
      </div>
    </FormSection>
  );
}
