// step/settings.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../schema/core/yacht.schema";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";
import { SearchTag } from "@/types/bookings/search/tag.types";

interface SettingStepProps {
  searchTagData: SearchTag[];
}

export default function SettingsStep({searchTagData}:SettingStepProps) {
  return (
    <>
      {/* ======================================================
          BASIC SETTINGS
      ====================================================== */}

      <FormSection
        title="Yacht Settings"
        description="General yacht configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormSchema> name="active" label="Active" />

          <FormSwitch<YachtFormSchema> name="featured" label="Featured" />

          <FormSwitch<YachtFormSchema> name="searchable" label="Searchable" />

          <FormSelect<YachtFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />
        </div>
      </FormSection>

      {/* ======================================================
          SEARCH METADATA
      ====================================================== */}

      <FormSection
        title="Search Metadata"
        description="Search engine optimization data"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema> name="name" label="Yacht Name" />

          <FormMultiCombobox<YachtFormSchema>
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

      {/* ======================================================
          PROVIDER INFORMATION
      ====================================================== */}

      <FormSection
        title="Provider Information"
        description="External booking provider information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="providerBookingId"
            label="Provider Booking ID"
          />
        </div>
      </FormSection>
    </>
  );
}
