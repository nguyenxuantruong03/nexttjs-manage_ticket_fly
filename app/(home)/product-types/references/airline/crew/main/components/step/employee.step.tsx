"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyCrewFormSchema } from "../form/schema";

export default function EmployeeStep() {
  return (
    <FormSection
      title="Employee Information"
      description="Employee identification information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyCrewFormSchema>
          name="employeeNumber"
          label="Employee Number"
          placeholder="EMP001"
        />
      </div>
    </FormSection>
  );
}
