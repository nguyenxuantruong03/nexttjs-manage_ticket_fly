"use client";

import FormSection from "@/components/form/FormSection";

import { FormSelect, FormSwitch } from "@/components/form/form-data";

import { WardFormSchema } from "../form/schema";

import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

import { EntityOption } from "@/components/form/entity-selector";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import { SearchTag } from "@/types/searchs/search/tag.types";

import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";

import { BookingType } from "@/types/common/commerce/booking-type";

interface SearchStepProps {
  searchTagData: SearchTag[];
  bookingTypeData: BookingType[];
}

export default function SearchStep({
  searchTagData,
  bookingTypeData,
}: SearchStepProps) {
  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));

  return (
    <FormSection
      title="Search Metadata"
      description="Search engine configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormSelect<WardFormSchema>
          name="searchPriority"
          label="Search Priority"
          placeholder="Select search priority"
          options={SEARCH_PRIORITY_OPTIONS}
        />

        <FormSwitch<WardFormSchema> name="searchable" label="Searchable" />

        <FormEntityMultiSelector<WardFormSchema, SearchTag>
          name="tagIds"
          label="Tags"
          placeholder="Search tags..."
          searchPlaceholder="Search tags..."
          emptyText="No tags found"
          createText="Create tag"
          options={tagOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <SearchTagCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
