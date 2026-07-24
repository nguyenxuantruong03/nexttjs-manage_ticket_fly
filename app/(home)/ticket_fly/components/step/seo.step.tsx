// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";

export default function SeoStep() {
  return (
    <FormSection
      title="SEO & Search"
      description="Search optimization metadata"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFormSchema> name="name" label="SEO Name" />

        <FormInput<FlyFormSchema> name="slug" label="SEO Slug" />

        <FormInput<FlyFormSchema> name="searchText" label="Search Text" />

        <FormInput<FlyFormSchema>
          name="searchPriority"
          label="Search Priority"
          type="number"
        />

        <FormSwitch<FlyFormSchema> name="searchable" label="Searchable" />

        <FormSwitch<FlyFormSchema> name="featured" label="Featured" />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <FormInput<FlyFormSchema> name="aliases.0" label="Alias" />

        <FormInput<FlyFormSchema> name="keywords.0" label="Keyword" />

        <FormInput<FlyFormSchema> name="tags.0" label="Tag" />
      </div>
    </FormSection>
  );
}
