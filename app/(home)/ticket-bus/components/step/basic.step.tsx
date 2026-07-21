// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { BusFormValues } from "../schema/core/bus.schema";

export default function BasicStep() {
  return (
    <>
      <FormSection
        title="Bus Information"
        description="General bus information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="providerBookingId"
            label="Provider Booking ID"
          />

          <FormInput<BusFormValues> name="name" label="Bus Name" />

          <FormInput<BusFormValues> name="slug" label="Slug" />

          <FormInput<BusFormValues>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />

          <FormInput<BusFormValues> name="searchText" label="Search Text" />

          <FormSwitch<BusFormValues> name="active" label="Active" />

          <FormSwitch<BusFormValues> name="featured" label="Featured" />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="SEO & search configuration"
      >
        <div className="grid gap-6">
          <FormInput<BusFormValues>
            name="aliases"
            label="Aliases"
            placeholder="Press Enter to add alias"
          />

          <FormInput<BusFormValues>
            name="keywords"
            label="Keywords"
            placeholder="Press Enter to add keyword"
          />

          <FormInput<BusFormValues>
            name="tags"
            label="Tags"
            placeholder="Press Enter to add tag"
          />
        </div>
      </FormSection>
    </>
  );
}
