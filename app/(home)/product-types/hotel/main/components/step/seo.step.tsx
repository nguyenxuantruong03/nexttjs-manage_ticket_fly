// step/seo.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormSelect, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";
import { SearchTag } from "@/types/searchs/search/tag.types";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/searchs/search-prioty-score";
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
    <>
      {/* ======================================================
          SEARCH METADATA
      ====================================================== */}

      <FormSection
        title="SEO & Search"
        description="Search metadata & visibility"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntityMultiSelector<HotelSchemaForm, SearchTag>
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

          <FormSelect<HotelSchemaForm>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <FormSwitch<HotelSchemaForm>
            name="featured"
            label="Featured"
            description="Show hotel as featured"
          />

          <FormSwitch<HotelSchemaForm>
            name="searchable"
            label="Searchable"
            description="Allow hotel in search"
          />
        </div>
      </FormSection>
    </>
  );
}
