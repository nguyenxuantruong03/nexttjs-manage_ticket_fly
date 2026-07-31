// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import { SearchTag } from "@/types/bookings/search/tag.types";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

interface BasicStepProps {
  searchTagData: SearchTag[];
}

export default function BasicStep({ searchTagData }: BasicStepProps) {
  return (
    <>
      <FormSection
        title="Bus Information"
        description="General bus information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormInput<BusFormSchema> name="name" label="Bus Name" />

          <FormSelect<BusFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />

          <FormSwitch<BusFormSchema> name="active" label="Active" />

          <FormSwitch<BusFormSchema> name="featured" label="Featured" />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="SEO & search configuration"
      >
        <div className="grid gap-6">
          <FormMultiCombobox<BusFormSchema>
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
    </>
  );
}
