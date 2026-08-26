"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { DiningServiceTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Dining Service Type"
      description="Basic dining service type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<DiningServiceTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Room Service"
        />

        <FormInput<DiningServiceTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Food and beverage service delivered to guest rooms"
        />

        <FormInput<DiningServiceTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="concierge-bell"
        />
      </div>
    </FormSection>
  );
}
