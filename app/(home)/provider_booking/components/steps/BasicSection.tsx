"use client";

import {
  FormImageUpload,
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import FormSection from "@/components/form/FormSection";
import { ProviderBookingFormSchema } from "../form/schema";

export default function BasicSection() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic provider information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ProviderBookingFormSchema>
          name="displayName"
          label="Display Name"
          placeholder="Enter display name"
        />

        <FormInput<ProviderBookingFormSchema>
          name="officialName"
          label="Official Name"
          placeholder="Enter official business name"
        />

        <FormInput<ProviderBookingFormSchema>
          name="shortName"
          label="Short Name"
          placeholder="Enter short name"
        />

        <FormTextarea<ProviderBookingFormSchema>
          name="subtitle"
          label="Subtitle"
          placeholder="Enter a short subtitle"
        />

        <FormTextarea<ProviderBookingFormSchema>
          name="description"
          label="Description"
          placeholder="Enter provider description"
        />

        <FormImageUpload<ProviderBookingFormSchema> name="logo" label="Logo" />

        <FormImageUpload<ProviderBookingFormSchema>
          name="banner"
          label="Banner"
        />
      </div>
    </FormSection>
  );
}
