"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { RouteTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Route type configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<RouteTypeFormSchema>
          name="active"
          label="Active"
        />

        <FormInput<RouteTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </FormSection>
  );
}