// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { SearchTag } from "@/types/bookings/search/tag.types";

interface SeoStepProps {
  searchTagData: SearchTag[];
}

export default function SeoStep({ searchTagData }: SeoStepProps) {
  return (
    <FormSection
      title="SEO & Search"
      description="Search optimization metadata"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFormSchema> name="name" label="SEO Name" />

        <FormSelect<FlyFormSchema>
          name="searchPriority"
          label="Search Priority"
          placeholder="Select search priority"
          options={SEARCH_PRIORITY_OPTIONS}
        />

        <FormSwitch<FlyFormSchema> name="searchable" label="Searchable" />

        <FormSwitch<FlyFormSchema> name="featured" label="Featured" />
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <FormMultiCombobox<FlyFormSchema>
          name="tagIds"
          label="Tags"
          placeholder="Select tags..."
          searchPlaceholder="Search tags..."
          options={searchTagData.map((tag) => ({
            label: tag.name,
            value: tag.id,
          }))}
        />
      </div>
    </FormSection>
  );
}
