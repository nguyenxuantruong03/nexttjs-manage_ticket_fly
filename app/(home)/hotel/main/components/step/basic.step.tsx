// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelStatus } from "@/types/bookings/hotel/enum/enums";

import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import { SearchTag } from "@/types/bookings/search/tag.types";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";
import SearchTagCreateDialog from "@/app/(home)/search/tag/components/SearchTagCreateDialog";

const statusOptions = Object.values(HotelStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

interface BasicStepProps {
  searchTagData: SearchTag[];
}

export default function BasicStep({ searchTagData }: BasicStepProps) {
  const tagOptions: EntityOption<SearchTag>[] = searchTagData.map((tag) => ({
    value: tag.id,
    label: tag.name,
    description: tag.type ?? undefined,
    data: tag,
  }));
  return (
    <>
      {/* ======================================================
          BASIC INFORMATION
      ====================================================== */}

      <FormSection
        title="Basic Information"
        description="General hotel information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="name"
            label="Hotel Name"
            placeholder="Hotel name"
          />

          <FormSelect<HotelSchemaForm>
            name="status"
            label="Status"
            options={statusOptions}
          />

          <FormSelect<HotelSchemaForm>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
        </div>
      </FormSection>

      {/* ======================================================
          VISIBILITY
      ====================================================== */}

      <FormSection title="Visibility" description="Control hotel visibility">
        <div className="grid gap-6 md:grid-cols-3">
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
          
          <FormEntityMultiSelector<HotelSchemaForm, SearchTag>
            name="tags"
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

      {/* ======================================================
          STATISTICS
      ====================================================== */}
    </>
  );
}
