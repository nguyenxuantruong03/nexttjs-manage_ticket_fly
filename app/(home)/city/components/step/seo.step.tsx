"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

export default function SeoStep() {
  return (
    <FormSection title="SEO" description="Search engine optimization">
      <div className="grid gap-6">
        <FormInput<CityFormValues> name="seoTitle" label="SEO Title" />

        <FormInput<CityFormValues>
          name="seoDescription"
          label="SEO Description"
        />

        <FormInput<CityFormValues> name="seoKeywords.0" label="SEO Keyword" />
      </div>
    </FormSection>
  );
}
