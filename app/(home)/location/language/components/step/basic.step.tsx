"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { LanguageFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Language" description="Basic language information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<LanguageFormSchema>
          name="code"
          label="Code"
          placeholder="en"
        />

        <FormInput<LanguageFormSchema>
          name="iso3"
          label="ISO 3"
          placeholder="eng"
        />

        <FormInput<LanguageFormSchema>
          name="locale"
          label="Locale"
          placeholder="en-US"
        />

        <FormInput<LanguageFormSchema>
          name="name"
          label="Language Name"
          placeholder="English"
        />

        <FormInput<LanguageFormSchema>
          name="nativeName"
          label="Native Name"
          placeholder="English"
        />

        <FormInput<LanguageFormSchema>
          name="flagEmoji"
          label="Flag Emoji"
          placeholder="🇺🇸"
        />

        <FormCheckbox<LanguageFormSchema>
          name="rtl"
          label="Right to Left (RTL)"
        />
      </div>
    </FormSection>
  );
}
