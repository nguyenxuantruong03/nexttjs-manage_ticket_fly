// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { HotelFormSchema } from "../schema";

export default function SeoStep() {
  return (
    <>
      <FormSection
        title="Search Information"
        description="SEO & search metadata"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema> name="slug" label="Slug" />

          <FormInput<HotelFormSchema>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />
        </div>

        <FormInput<HotelFormSchema> name="searchText" label="Search Text" />
      </FormSection>

      <FormSection title="Keywords" description="SEO keywords">
        <FormInput<HotelFormSchema> name="keywords.0" label="Keyword" />
      </FormSection>

      <FormSection title="Aliases" description="Alternative hotel names">
        <FormInput<HotelFormSchema> name="aliases.0" label="Alias" />
      </FormSection>

      <FormSection title="Tags" description="Search tags">
        <FormInput<HotelFormSchema> name="tags.0" label="Tag" />
      </FormSection>

      <FormSection title="Visibility" description="Search visibility settings">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormSchema> name="searchable" label="Searchable" />

          <FormSwitch<HotelFormSchema> name="featured" label="Featured" />
        </div>
      </FormSection>
    </>
  );
}
