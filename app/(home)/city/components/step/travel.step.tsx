"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

export default function TravelStep() {
  return (
    <FormSection title="Travel Information" description="Best season to visit">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormValues> name="bestMonths.0" label="Best Month" />

        <FormInput<CityFormValues> name="rainyMonths.0" label="Rainy Month" />
      </div>
    </FormSection>
  );
}
