"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { DistrictFormSchema } from "../form/schema";

export default function LocationStep() {
  return (
    <FormSection title="Location" description="District geographic information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<DistrictFormSchema>
          name="latitude"
          label="Latitude"
          type="number"
          placeholder="10.8231"
        />

        <FormInput<DistrictFormSchema>
          name="longitude"
          label="Longitude"
          type="number"
          placeholder="106.6297"
        />
      </div>
    </FormSection>
  );
}
