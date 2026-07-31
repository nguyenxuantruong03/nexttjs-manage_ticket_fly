"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyAirportFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic airport information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAirportFormSchema>
          name="name"
          label="Airport Name"
          placeholder="Tan Son Nhat International Airport"
        />

        <FormInput<FlyAirportFormSchema>
          name="code"
          label="Airport Code"
          placeholder="SGN"
        />

        <FormInput<FlyAirportFormSchema>
          name="iataCode"
          label="IATA Code"
          placeholder="SGN"
        />

        <FormInput<FlyAirportFormSchema>
          name="icaoCode"
          label="ICAO Code"
          placeholder="VVTS"
        />
      </div>
    </FormSection>
  );
}
