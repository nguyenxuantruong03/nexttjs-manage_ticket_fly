// step/extras.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import {
  YachtExtraCategory,
  YachtExtraPricingType,
} from "@/types/bookings/yacht/enums";
import { YachtFormValues } from "../schema/core/yacht.schema";

const extraCategoryOptions = Object.values(YachtExtraCategory).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const extraPricingTypeOptions = Object.values(YachtExtraPricingType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function ExtrasStep() {
  return (
    <>
      {/* ======================================================
          EXTRA INFORMATION
      ====================================================== */}

      <FormSection
        title="Extra Information"
        description="Additional yacht services"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues> name="extras.0.name" label="Extra Name" />

          <FormInput<YachtFormValues>
            name="extras.0.description"
            label="Description"
          />

          <FormSelect<YachtFormValues>
            name="extras.0.category"
            label="Category"
            options={extraCategoryOptions}
          />

          <FormSelect<YachtFormValues>
            name="extras.0.pricingType"
            label="Pricing Type"
            options={extraPricingTypeOptions}
          />

          <FormInput<YachtFormValues>
            name="extras.0.price"
            label="Price"
            type="number"
          />

          <FormSwitch<YachtFormValues> name="extras.0.active" label="Active" />
        </div>
      </FormSection>

      {/* ======================================================
          BOOKING EXTRAS
      ====================================================== */}

      <FormSection
        title="Booking Extras"
        description="Extra items available during booking"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="extras.0.bookingExtras.0.name"
            label="Booking Extra Name"
          />

          <FormInput<YachtFormValues>
            name="extras.0.bookingExtras.0.price"
            label="Booking Extra Price"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          PACKAGE EXTRA RELATION
      ====================================================== */}

      <FormSection
        title="Package Extra Mapping"
        description="Connect extra with package"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="extras.0.packageExtras.0.packageId"
            label="Package ID"
          />

          <FormInput<YachtFormValues>
            name="extras.0.packageExtras.0.extraId"
            label="Extra ID"
          />
        </div>
      </FormSection>

      {/* ======================================================
          EXTRA IMAGES
      ====================================================== */}

      <FormSection title="Extra Images" description="Extra service images">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="extras.0.images.0.url"
            label="Image URL"
          />

          <FormInput<YachtFormValues>
            name="extras.0.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
