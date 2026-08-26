"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { AirportTransferFormSchema } from "../schema/core/schema";
import { SearchTag } from "@/types/searchs/search/tag.types";
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
    <>
      {/* SEO / Search */}
      <FormSection
        title="SEO / Search"
        description="Search optimization and visibility"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntityMultiSelector<AirportTransferFormSchema, SearchTag>
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

          <FormInput<AirportTransferFormSchema>
            name="searchPriority"
            label="Search Priority"
            type="number"
            placeholder="Enter search priority"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="searchable"
            label="Searchable"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="featured"
            label="Featured"
          />
        </div>
      </FormSection>
    </>
  );
}
