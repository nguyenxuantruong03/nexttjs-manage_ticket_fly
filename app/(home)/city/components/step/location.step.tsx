"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function LocationStep() {
  return (
    <FormSection title="Location" description="City geographic information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormSchema>
          name="countryId"
          label="Country ID"
          placeholder="country_id"
        />

        <FormInput<CityFormSchema>
          name="administrativeArea"
          label="Administrative Area"
          placeholder="Ho Chi Minh"
        />

        <FormInput<CityFormSchema>
          name="region"
          label="Region"
          placeholder="South Vietnam"
        />

        <FormSwitch<CityFormSchema> name="isCapital" label="Capital City" />

        <FormInput<CityFormSchema>
          name="latitude"
          label="Latitude"
          type="number"
        />

        <FormInput<CityFormSchema>
          name="longitude"
          label="Longitude"
          type="number"
        />

        <FormInput<CityFormSchema>
          name="elevation"
          label="Elevation"
          type="number"
        />

        <FormInput<CityFormSchema>
          name="timezone"
          label="Timezone"
          placeholder="Asia/Ho_Chi_Minh"
        />

        <FormInput<CityFormSchema>
          name="utcOffset"
          label="UTC Offset"
          placeholder="+07:00"
        />
      </div>
    </FormSection>
  );
}
