// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

export default function BasicStep() {
  return (
    <>
      <FormSection
        title="Basic Information"
        description="Basic flight information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues> name="name" label="Flight Name" />

          <FormInput<TicketFlyFormValues> name="slug" label="Slug" />

          <FormInput<TicketFlyFormValues>
            name="searchText"
            label="Search Text"
          />

          <FormInput<TicketFlyFormValues>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />

          <FormSwitch<TicketFlyFormValues> name="active" label="Active" />

          <FormSwitch<TicketFlyFormValues> name="featured" label="Featured" />

          <FormSwitch<TicketFlyFormValues>
            name="searchable"
            label="Searchable"
          />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="Search aliases keywords and tags"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues> name="aliases.0" label="Alias" />

          <FormInput<TicketFlyFormValues> name="keywords.0" label="Keyword" />

          <FormInput<TicketFlyFormValues> name="tags.0" label="Tag" />
        </div>
      </FormSection>
    </>
  );
}
