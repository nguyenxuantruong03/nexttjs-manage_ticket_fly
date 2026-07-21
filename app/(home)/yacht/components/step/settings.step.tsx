// step/settings.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormValues } from "../schema/core/yacht.schema";


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
          <FormSwitch<YachtFormValues> name="active" label="Active" />

          <FormSwitch<YachtFormValues> name="featured" label="Featured" />

          <FormSwitch<YachtFormValues> name="searchable" label="Searchable" />

          <FormInput<YachtFormValues>
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
          <FormInput<YachtFormValues> name="name" label="Yacht Name" />

          <FormInput<YachtFormValues> name="slug" label="Slug" />

          <FormInput<YachtFormValues> name="searchText" label="Search Text" />

          <FormInput<YachtFormValues> name="aliases.0" label="Alias" />

          <FormInput<YachtFormValues> name="keywords.0" label="Keyword" />

          <FormInput<YachtFormValues> name="tags.0" label="Tag" />
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
          <FormInput<YachtFormValues>
            name="providerBookingId"
            label="Provider Booking ID"
          />
        </div>
      </FormSection>
    </>
  );
}
