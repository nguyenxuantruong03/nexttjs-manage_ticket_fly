"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { WardFormSchema } from "../form/schema";

export default function LocationStep() {
  return (
    <FormSection title="Location" description="Ward geographic information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<WardFormSchema>
          name="latitude"
          label="Latitude"
          type="number"
          placeholder="10.8231"
        />

        <FormInput<WardFormSchema>
          name="longitude"
          label="Longitude"
          type="number"
          placeholder="106.6297"
        />
      </div>
    </FormSection>
  );
}
