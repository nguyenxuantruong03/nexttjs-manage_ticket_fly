"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function TravelStep() {
  return (
    <FormSection title="Travel Information" description="Best season to visit">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormSchema> name="bestMonths.0" label="Best Month" />

        <FormInput<CityFormSchema> name="rainyMonths.0" label="Rainy Month" />
      </div>
    </FormSection>
  );
}
