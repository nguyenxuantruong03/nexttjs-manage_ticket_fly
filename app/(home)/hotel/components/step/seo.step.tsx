// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { HotelFormValues } from "../schema";

export default function SeoStep() {
  return (
    <>
      <FormSection
        title="Search Information"
        description="SEO & search metadata"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues> name="slug" label="Slug" />

          <FormInput<HotelFormValues>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />
        </div>

        <FormInput<HotelFormValues> name="searchText" label="Search Text" />
      </FormSection>

      <FormSection title="Keywords" description="SEO keywords">
        <FormInput<HotelFormValues> name="keywords.0" label="Keyword" />
      </FormSection>

      <FormSection title="Aliases" description="Alternative hotel names">
        <FormInput<HotelFormValues> name="aliases.0" label="Alias" />
      </FormSection>

      <FormSection title="Tags" description="Search tags">
        <FormInput<HotelFormValues> name="tags.0" label="Tag" />
      </FormSection>

      <FormSection title="Visibility" description="Search visibility settings">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues> name="searchable" label="Searchable" />

          <FormSwitch<HotelFormValues> name="featured" label="Featured" />

          <FormSwitch<HotelFormValues> name="active" label="Active" />
        </div>
      </FormSection>
    </>
  );
}
