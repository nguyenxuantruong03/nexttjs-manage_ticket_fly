"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { FlyAllianceFormSchema } from "../schema/alliance.schema";


export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic alliance information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAllianceFormSchema>
          name="name"
          label="Alliance Name"
          placeholder="Star Alliance"
        />

        <FormInput<FlyAllianceFormSchema>
          name="code"
          label="Alliance Code"
          placeholder="STAR"
        />

        <FormInput<FlyAllianceFormSchema>
          name="logo"
          label="Logo"
          placeholder="https://example.com/logo.png"
        />

        <FormInput<FlyAllianceFormSchema>
          name="description"
          label="Description"
          placeholder="Global airline alliance"
        />
      </div>
    </FormSection>
  );
}