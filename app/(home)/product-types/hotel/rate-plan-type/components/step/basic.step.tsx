"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { RatePlanTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Rate Plan Type"
      description="Basic rate plan type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RatePlanTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Refundable"
        />

        <FormInput<RatePlanTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Rate plan type description"
        />

        <FormIcon<RatePlanTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="badge-percent"
        />
      </div>
    </FormSection>
  );
}
