"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

import { PlaceFormSchema } from "../form/schema";

import { SearchTag } from "@/types/bookings/search/tag.types";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import { EntityOption } from "@/components/entity-selector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

interface SearchStepProps {
  searchTagData: SearchTag[];
}

export default function SearchStep({ searchTagData }: SearchStepProps) {
  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    description: tag.type ?? undefined,
    data: tag,
  }));
  return (
    <FormSection
      title="Search Metadata"
      description="Search engine configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<PlaceFormSchema>
          name="searchPriority"
          label="Search Priority"
          placeholder="Select search priority"
          options={SEARCH_PRIORITY_OPTIONS}
        />

        <FormSwitch<PlaceFormSchema> name="featured" label="Featured" />

        <FormSwitch<PlaceFormSchema> name="searchable" label="Searchable" />

        <FormEntityMultiSelector<PlaceFormSchema, SearchTag>
          name="tagIds"
          label="Tags"
          placeholder="Search tags..."
          searchPlaceholder="Search tags..."
          emptyText="No tags found"
          createText="Create tag"
          options={tagOptions}
          enableCreate
          renderCreateDialog={(props) => <SearchTagCreateDialog {...props} />}
        />
      </div>
    </FormSection>
  );
}
