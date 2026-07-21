// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { HotelStatus } from "@/types/bookings/hotel/enum/enums";

import { HotelFormValues } from "../schema";

const statusOptions = Object.values(HotelStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function BasicStep() {
  return (
    <>
      <FormSection
        title="Basic Information"
        description="General hotel information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormValues>
            name="name"
            label="Hotel Name"
            placeholder="Hotel name"
          />

          <FormInput<HotelFormValues>
            name="slug"
            label="Slug"
            placeholder="hotel-slug"
          />

          <FormSelect<HotelFormValues>
            name="status"
            label="Status"
            options={statusOptions}
          />

          <FormInput<HotelFormValues>
            name="searchPriority"
            label="Search Priority"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Visibility" description="Control hotel visibility">
        <div className="grid gap-6 md:grid-cols-3">
          <FormSwitch<HotelFormValues>
            name="active"
            label="Active"
            description="Hotel is active"
          />

          <FormSwitch<HotelFormValues>
            name="featured"
            label="Featured"
            description="Show as featured"
          />

          <FormSwitch<HotelFormValues>
            name="searchable"
            label="Searchable"
            description="Visible in search"
          />
        </div>
      </FormSection>
    </>
  );
}
