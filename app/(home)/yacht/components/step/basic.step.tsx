// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormSchema } from "../schema/core/yacht.schema";

export default function BasicStep() {
  return (
    <>
      {/* ======================================================
          BASIC INFORMATION
      ====================================================== */}

      <FormSection
        title="Yacht Information"
        description="Basic yacht information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormInput<YachtFormSchema> name="name" label="Yacht Name" />

          <FormInput<YachtFormSchema> name="slug" label="Slug" />

          <FormInput<YachtFormSchema> name="searchText" label="Search Text" />

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
        description="Search engine optimization fields"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema> name="aliases.0" label="Alias" />

          <FormInput<YachtFormSchema> name="keywords.0" label="Keyword" />

          <FormInput<YachtFormSchema> name="tags.0" label="Tag" />
        </div>
      </FormSection>

      {/* ======================================================
          NOTICE
      ====================================================== */}

      <FormSection
        title="Booking Notice"
        description="Important information shown to customers"
      >
        <div className="grid gap-6">
          <FormInput<YachtFormSchema>
            name="notice.important"
            label="Important Notice"
          />

          <FormInput<YachtFormSchema>
            name="notice.beforeBooking"
            label="Before Booking Notice"
          />

          <FormInput<YachtFormSchema>
            name="notice.afterBooking"
            label="After Booking Notice"
          />

          <FormInput<YachtFormSchema>
            name="notice.safetyNotice"
            label="Safety Notice"
          />
        </div>
      </FormSection>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <FormSection title="Visibility" description="Yacht publishing settings">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<YachtFormSchema> name="active" label="Active" />

          <FormSwitch<YachtFormSchema> name="featured" label="Featured" />

          <FormSwitch<YachtFormSchema> name="searchable" label="Searchable" />
        </div>
      </FormSection>

      {/* ======================================================
          MARINA SUMMARY
      ====================================================== */}

      <FormSection title="Marina" description="Linked departure marina">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="marina.0.name"
            label="Marina Name"
          />

          <FormInput<YachtFormSchema>
            name="marina.0.addressId"
            label="Address ID"
          />

          <FormInput<YachtFormSchema> name="marina.0.city" label="City" />

          <FormInput<YachtFormSchema> name="marina.0.country" label="Country" />

          <FormInput<YachtFormSchema>
            name="marina.0.contactPhone"
            label="Contact Phone"
          />

          <FormInput<YachtFormSchema>
            name="marina.0.operatingHours"
            label="Operating Hours"
          />
        </div>
      </FormSection>
    </>
  );
}
