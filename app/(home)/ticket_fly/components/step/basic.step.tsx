// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";

export default function BasicStep() {
  return (
    <>
      <FormSection
        title="Basic Information"
        description="Basic flight information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema> name="name" label="Flight Name" />

          <FormInput<FlyFormSchema> name="slug" label="Slug" />

          <FormInput<FlyFormSchema> name="searchText" label="Search Text" />

          <FormInput<FlyFormSchema>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />

          <FormSwitch<FlyFormSchema> name="active" label="Active" />

          <FormSwitch<FlyFormSchema> name="featured" label="Featured" />

          <FormSwitch<FlyFormSchema> name="searchable" label="Searchable" />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="Search aliases keywords and tags"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema> name="aliases.0" label="Alias" />

          <FormInput<FlyFormSchema> name="keywords.0" label="Keyword" />

          <FormInput<FlyFormSchema> name="tags.0" label="Tag" />
        </div>
      </FormSection>
    </>
  );
}
