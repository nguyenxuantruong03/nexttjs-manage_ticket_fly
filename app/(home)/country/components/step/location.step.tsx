"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";
import { CountryFormValues } from "../form/schema";
import { Continent } from "@/types/bookings/location/city";

const continentOptions = Object.values(Continent).map((value) => ({
  label: value.replaceAll("_", " "),
  value,
}));

export default function LocationStep() {
  return (
    <FormSection title="Location" description="Geographical information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<CountryFormValues>
          name="continent"
          label="Continent"
          options={continentOptions}
        />

        <FormInput<CountryFormValues>
          name="timezone"
          label="Timezone"
          placeholder="Asia/Ho_Chi_Minh"
        />

        <FormInput<CountryFormValues>
          name="languages.0"
          label="Primary Language"
          placeholder="Vietnamese"
        />
      </div>
    </FormSection>
  );
}
