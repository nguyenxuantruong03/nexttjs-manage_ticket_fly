// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";

export default function BasicStep() {
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

          <FormInput<BusFormSchema> name="slug" label="Slug" />

          <FormInput<BusFormSchema>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />

          <FormInput<BusFormSchema> name="searchText" label="Search Text" />

          <FormSwitch<BusFormSchema> name="active" label="Active" />

          <FormSwitch<BusFormSchema> name="featured" label="Featured" />
        </div>
      </FormSection>

      <FormSection
        title="Search Metadata"
        description="SEO & search configuration"
      >
        <div className="grid gap-6">
          <FormInput<BusFormSchema>
            name="aliases"
            label="Aliases"
            placeholder="Press Enter to add alias"
          />

          <FormInput<BusFormSchema>
            name="keywords"
            label="Keywords"
            placeholder="Press Enter to add keyword"
          />

          <FormInput<BusFormSchema>
            name="tags"
            label="Tags"
            placeholder="Press Enter to add tag"
          />
        </div>
      </FormSection>
    </>
  );
}
