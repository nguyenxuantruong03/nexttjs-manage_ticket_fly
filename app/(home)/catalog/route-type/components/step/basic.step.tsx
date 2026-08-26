"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { RouteTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Route Type"
      description="Basic route type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RouteTypeFormSchema>
          name="name"
          label="Name"
          placeholder="One Way"
        />

        <FormInput<RouteTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Enter route type description"
        />

        <FormInput<RouteTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="route"
        />
      </div>
    </FormSection>
  );
}