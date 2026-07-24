"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { CountryFormSchema } from "../form/schema";


export default function BasicStep() {
  return (
    <FormSection title="Country" description="Basic country information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CountryFormSchema>
          name="name"
          label="Name"
          placeholder="Vietnam"
        />

        <FormInput<CountryFormSchema>
          name="officialName"
          label="Official Name"
          placeholder="Socialist Republic of Vietnam"
        />

        <FormInput<CountryFormSchema>
          name="slug"
          label="Slug"
          placeholder="vietnam"
        />

        <FormInput<CountryFormSchema>
          name="code"
          label="Code"
          placeholder="VN"
        />

        <FormInput<CountryFormSchema>
          name="iso2"
          label="ISO 2"
          placeholder="VN"
        />

        <FormInput<CountryFormSchema>
          name="iso3"
          label="ISO 3"
          placeholder="VNM"
        />

        <FormInput<CountryFormSchema>
          name="phoneCode"
          label="Phone Code"
          placeholder="+84"
        />

        <FormInput<CountryFormSchema>
          name="capital"
          label="Capital"
          placeholder="Hanoi"
        />
      </div>
    </FormSection>
  );
}
