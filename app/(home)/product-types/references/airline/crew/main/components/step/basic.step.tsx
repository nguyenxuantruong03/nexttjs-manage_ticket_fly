"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyCrewFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly crew information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyCrewFormSchema>
          name="firstName"
          label="First Name"
          placeholder="John"
        />

        <FormInput<FlyCrewFormSchema>
          name="lastName"
          label="Last Name"
          placeholder="Smith"
        />

        <FormInput<FlyCrewFormSchema>
          name="employeeNumber"
          label="Employee Number"
          placeholder="EMP001"
        />

        <FormInput<FlyCrewFormSchema>
          name="nationality"
          label="Nationality"
          placeholder="Vietnamese"
        />

        <FormInput<FlyCrewFormSchema>
          name="birthDate"
          label="Birth Date"
          placeholder="YYYY-MM-DD"
        />

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
