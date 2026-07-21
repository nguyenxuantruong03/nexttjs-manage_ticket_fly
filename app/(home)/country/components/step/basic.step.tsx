"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { CountryFormValues } from "../form/schema";


export default function BasicStep() {
  return (
    <FormSection title="Country" description="Basic country information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CountryFormValues>
          name="name"
          label="Name"
          placeholder="Vietnam"
        />

        <FormInput<CountryFormValues>
          name="officialName"
          label="Official Name"
          placeholder="Socialist Republic of Vietnam"
        />

        <FormInput<CountryFormValues>
          name="slug"
          label="Slug"
          placeholder="vietnam"
        />

        <FormInput<CountryFormValues>
          name="code"
          label="Code"
          placeholder="VN"
        />

        <FormInput<CountryFormValues>
          name="iso2"
          label="ISO 2"
          placeholder="VN"
        />

        <FormInput<CountryFormValues>
          name="iso3"
          label="ISO 3"
          placeholder="VNM"
        />

        <FormInput<CountryFormValues>
          name="phoneCode"
          label="Phone Code"
          placeholder="+84"
        />

        <FormInput<CountryFormValues>
          name="capital"
          label="Capital"
          placeholder="Hanoi"
        />
      </div>
    </FormSection>
  );
}
