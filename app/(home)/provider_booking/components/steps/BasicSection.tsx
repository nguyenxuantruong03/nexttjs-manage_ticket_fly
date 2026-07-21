"use client";

import {
  FormImageUpload,
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import FormSection from "@/components/form/FormSection";

export default function BasicSection() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic provider information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput
          name="displayName"
          label="Display Name"
          placeholder="Enter display name"
        />

        <FormInput
          name="officialName"
          label="Official Name"
          placeholder="Enter official business name"
        />

        <FormInput
          name="shortName"
          label="Short Name"
          placeholder="Enter short name"
        />

        <FormTextarea
          name="subtitle"
          label="Subtitle"
          placeholder="Enter a short subtitle"
        />

        <FormTextarea
          name="description"
          label="Description"
          placeholder="Enter provider description"
        />

        <FormImageUpload
          name="logo"
          label="Logo"
        />

        <FormImageUpload
          name="banner"
          label="Banner"
        />
      </div>
    </FormSection>
  );
}
