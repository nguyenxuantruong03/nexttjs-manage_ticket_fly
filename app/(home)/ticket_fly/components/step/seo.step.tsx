// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

export default function SeoStep() {
  return (
    <FormSection
      title="SEO & Search"
      description="Search optimization metadata"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TicketFlyFormValues> name="name" label="SEO Name" />

        <FormInput<TicketFlyFormValues> name="slug" label="SEO Slug" />

        <FormInput<TicketFlyFormValues> name="searchText" label="Search Text" />

        <FormInput<TicketFlyFormValues>
          name="searchPriority"
          label="Search Priority"
          type="number"
        />

        <FormSwitch<TicketFlyFormValues> name="searchable" label="Searchable" />

        <FormSwitch<TicketFlyFormValues> name="featured" label="Featured" />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <FormInput<TicketFlyFormValues> name="aliases.0" label="Alias" />

        <FormInput<TicketFlyFormValues> name="keywords.0" label="Keyword" />

        <FormInput<TicketFlyFormValues> name="tags.0" label="Tag" />
      </div>
    </FormSection>
  );
}
