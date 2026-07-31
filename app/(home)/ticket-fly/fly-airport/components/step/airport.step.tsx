"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyAirportFormSchema } from "../form/schema";

export default function AirportStep() {
  return (
    <FormSection
      title="Airport Details"
      description="Airport facilities and coordinates"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAirportFormSchema>
          name="terminalCount"
          label="Terminal Count"
          type="number"
          placeholder="2"
        />

        <FormInput<FlyAirportFormSchema>
          name="lat"
          label="Latitude"
          type="number"
          placeholder="10.8188"
        />

        <FormInput<FlyAirportFormSchema>
          name="lng"
          label="Longitude"
          type="number"
          placeholder="106.6519"
        />
      </div>
    </FormSection>
  );
}
