"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyCrewFormSchema } from "../form/schema";

export default function ContactStep() {
  return (
    <FormSection
      title="Contact Information"
      description="Contact information for this crew member"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyCrewFormSchema>
          name="email"
          label="Email"
          placeholder="crew@example.com"
        />

        <FormInput<FlyCrewFormSchema>
          name="phone"
          label="Phone"
          placeholder="+84..."
        />
      </div>
    </FormSection>
  );
}
