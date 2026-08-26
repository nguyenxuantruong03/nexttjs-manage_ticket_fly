"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { FlyAirlineFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly airline information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyAirlineFormSchema>
          name="name"
          label="Name"
          placeholder="Vietnam Airlines"
        />

        <FormInput<FlyAirlineFormSchema>
          name="legalName"
          label="Legal Name"
          placeholder="Vietnam Airlines JSC"
        />

        <FormInput<FlyAirlineFormSchema>
          name="iataCode"
          label="IATA Code"
          placeholder="VN"
        />

        <FormInput<FlyAirlineFormSchema>
          name="icaoCode"
          label="ICAO Code"
          placeholder="HVN"
        />

        <FormInput<FlyAirlineFormSchema>
          name="callsign"
          label="Callsign"
          placeholder="VIET NAM"
        />

        <FormInput<FlyAirlineFormSchema>
          name="country"
          label="Country"
          placeholder="Vietnam"
        />

        <FormInput<FlyAirlineFormSchema>
          name="website"
          label="Website"
          placeholder="https://..."
        />

        <FormInput<FlyAirlineFormSchema>
          name="hotline"
          label="Hotline"
          placeholder="+84..."
        />

        <FormInput<FlyAirlineFormSchema>
          name="email"
          label="Email"
          placeholder="contact@example.com"
          type="email"
        />

        <FormInput<FlyAirlineFormSchema>
          name="logo"
          label="Logo"
          placeholder="https://..."
        />

        <FormInput<FlyAirlineFormSchema>
          name="banner"
          label="Banner"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyAirlineFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the airline"
          />
        </div>
      </div>
    </FormSection>
  );
}
