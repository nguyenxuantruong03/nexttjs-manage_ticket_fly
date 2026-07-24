"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function SeoStep() {
  return (
    <FormSection title="SEO" description="Search engine optimization">
      <div className="grid gap-6">
        <FormInput<CityFormSchema> name="seoTitle" label="SEO Title" />

        <FormInput<CityFormSchema>
          name="seoDescription"
          label="SEO Description"
        />

        <FormInput<CityFormSchema> name="seoKeywords.0" label="SEO Keyword" />
      </div>
    </FormSection>
  );
}
