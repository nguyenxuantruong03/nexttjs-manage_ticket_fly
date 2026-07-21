"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="City" description="Basic city information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormValues>
          name="name"
          label="City Name"
          placeholder="Ho Chi Minh City"
        />

        <FormInput<CityFormValues>
          name="nativeName"
          label="Native Name"
          placeholder="Thành phố Hồ Chí Minh"
        />

        <FormInput<CityFormValues>
          name="slug"
          label="Slug"
          placeholder="ho-chi-minh"
        />

        <FormInput<CityFormValues>
          name="code"
          label="City Code"
          placeholder="SGN"
        />

        <FormInput<CityFormValues>
          name="iataCode"
          label="IATA Code"
          placeholder="SGN"
        />

        <FormInput<CityFormValues>
          name="subtitle"
          label="Subtitle"
          placeholder="Vietnam's largest city"
        />

        <FormInput<CityFormValues>
          name="shortDescription"
          label="Short Description"
          placeholder="Short city description"
        />

        <FormInput<CityFormValues>
          name="description"
          label="Description"
          placeholder="Full description"
        />
      </div>
    </FormSection>
  );
}
