"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

export default function LocationStep() {
  return (
    <FormSection title="Location" description="City geographic information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormValues>
          name="countryId"
          label="Country ID"
          placeholder="country_id"
        />

        <FormInput<CityFormValues>
          name="administrativeArea"
          label="Administrative Area"
          placeholder="Ho Chi Minh"
        />

        <FormInput<CityFormValues>
          name="region"
          label="Region"
          placeholder="South Vietnam"
        />

        <FormSwitch<CityFormValues> name="isCapital" label="Capital City" />

        <FormInput<CityFormValues>
          name="latitude"
          label="Latitude"
          type="number"
        />

        <FormInput<CityFormValues>
          name="longitude"
          label="Longitude"
          type="number"
        />

        <FormInput<CityFormValues>
          name="elevation"
          label="Elevation"
          type="number"
        />

        <FormInput<CityFormValues>
          name="timezone"
          label="Timezone"
          placeholder="Asia/Ho_Chi_Minh"
        />

        <FormInput<CityFormValues>
          name="utcOffset"
          label="UTC Offset"
          placeholder="+07:00"
        />
      </div>
    </FormSection>
  );
}
