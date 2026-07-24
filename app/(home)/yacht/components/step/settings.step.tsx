// step/settings.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../schema/core/yacht.schema";


export default function SettingsStep() {
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

          <FormInput<YachtFormSchema>
            name="searchPriority"
            label="Search Priority"
            type="number"
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

          <FormInput<YachtFormSchema> name="slug" label="Slug" />

          <FormInput<YachtFormSchema> name="searchText" label="Search Text" />

          <FormInput<YachtFormSchema> name="aliases.0" label="Alias" />

          <FormInput<YachtFormSchema> name="keywords.0" label="Keyword" />

          <FormInput<YachtFormSchema> name="tags.0" label="Tag" />
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
