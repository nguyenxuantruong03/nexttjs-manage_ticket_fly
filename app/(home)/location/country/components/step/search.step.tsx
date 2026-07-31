"use client";

import FormSection from "@/components/form/FormSection";
import { FormSelect } from "@/components/form/form-data";
import { CountryFormSchema } from "../form/schema";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import { SearchTag } from "@/types/bookings/search/tag.types";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import { EntityOption } from "@/components/entity-selector";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

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
      <div className="grid gap-6">
        <FormEntityMultiSelector<CountryFormSchema, SearchTag>
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

        <FormSelect<CountryFormSchema>
          name="searchPriority"
          label="Search Priority"
          placeholder="Select search priority"
          options={SEARCH_PRIORITY_OPTIONS}
        />
      </div>
    </FormSection>
  );
}
