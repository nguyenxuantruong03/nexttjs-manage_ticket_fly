"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="City" description="Basic city information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormSchema>
          name="name"
          label="City Name"
          placeholder="Ho Chi Minh City"
        />

        <FormInput<CityFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="Thành phố Hồ Chí Minh"
        />

        <FormInput<CityFormSchema>
          name="slug"
          label="Slug"
          placeholder="ho-chi-minh"
        />

        <FormInput<CityFormSchema>
          name="code"
          label="City Code"
          placeholder="SGN"
        />

        <FormInput<CityFormSchema>
          name="iataCode"
          label="IATA Code"
          placeholder="SGN"
        />

        <FormInput<CityFormSchema>
          name="subtitle"
          label="Subtitle"
          placeholder="Vietnam's largest city"
        />

        <FormInput<CityFormSchema>
          name="shortDescription"
          label="Short Description"
          placeholder="Short city description"
        />

        <FormInput<CityFormSchema>
          name="description"
          label="Description"
          placeholder="Full description"
        />
      </div>
    </FormSection>
  );
}
