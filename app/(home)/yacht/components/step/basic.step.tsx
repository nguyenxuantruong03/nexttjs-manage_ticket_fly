// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormValues } from "../schema/core/yacht.schema";

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
          <FormInput<YachtFormValues>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormInput<YachtFormValues> name="name" label="Yacht Name" />

          <FormInput<YachtFormValues> name="slug" label="Slug" />

          <FormInput<YachtFormValues> name="searchText" label="Search Text" />

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
        description="Search engine optimization fields"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues> name="aliases.0" label="Alias" />

          <FormInput<YachtFormValues> name="keywords.0" label="Keyword" />

          <FormInput<YachtFormValues> name="tags.0" label="Tag" />
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
          <FormInput<YachtFormValues>
            name="notice.important"
            label="Important Notice"
          />

          <FormInput<YachtFormValues>
            name="notice.beforeBooking"
            label="Before Booking Notice"
          />

          <FormInput<YachtFormValues>
            name="notice.afterBooking"
            label="After Booking Notice"
          />

          <FormInput<YachtFormValues>
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
          <FormSwitch<YachtFormValues> name="active" label="Active" />

          <FormSwitch<YachtFormValues> name="featured" label="Featured" />

          <FormSwitch<YachtFormValues> name="searchable" label="Searchable" />
        </div>
      </FormSection>

      {/* ======================================================
          MARINA SUMMARY
      ====================================================== */}

      <FormSection title="Marina" description="Linked departure marina">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="marina.0.name"
            label="Marina Name"
          />

          <FormInput<YachtFormValues>
            name="marina.0.addressId"
            label="Address ID"
          />

          <FormInput<YachtFormValues> name="marina.0.city" label="City" />

          <FormInput<YachtFormValues> name="marina.0.country" label="Country" />

          <FormInput<YachtFormValues>
            name="marina.0.contactPhone"
            label="Contact Phone"
          />

          <FormInput<YachtFormValues>
            name="marina.0.operatingHours"
            label="Operating Hours"
          />
        </div>
      </FormSection>
    </>
  );
}
