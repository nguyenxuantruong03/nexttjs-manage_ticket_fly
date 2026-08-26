// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormSelect, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
import { EntityOption } from "@/components/entity-selector";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface SeoStepProps {
  searchTagData: SearchTag[];
  bookingTypeData: BookingType[];
}

export default function SeoStep({
  searchTagData,
  bookingTypeData,
}: SeoStepProps) {
  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    data: tag,
  }));
  return (
    <FormSection
      title="SEO & Search"
      description="Search optimization metadata"
    >
      <div className="grid gap-6 md:grid-cols-2">
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
        <FormEntityMultiSelector<FlyFormSchema, SearchTag>
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
