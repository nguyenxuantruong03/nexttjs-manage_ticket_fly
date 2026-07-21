// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import { YachtImageCategory } from "@/types/bookings/yacht/enums";
import { YachtFormValues } from "../schema/core/yacht.schema";

const imageCategoryOptions = Object.values(YachtImageCategory).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ImagesStep() {
  return (
    <>
      {/* ======================================================
          YACHT IMAGES
      ====================================================== */}

      <FormSection title="Yacht Images" description="Main yacht gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues> name="image.0.url" label="Image URL" />

          <FormSelect<YachtFormValues>
            name="image.0.category"
            label="Image Category"
            options={imageCategoryOptions}
          />

          <FormSwitch<YachtFormValues>
            name="image.0.isPrimary"
            label="Primary Image"
          />

          <FormInput<YachtFormValues>
            name="image.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          VEHICLE IMAGES
      ====================================================== */}

      <FormSection title="Vehicle Images" description="Yacht vessel gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="vehicle.images.0.url"
            label="Vehicle Image URL"
          />

          <FormSelect<YachtFormValues>
            name="vehicle.images.0.category"
            label="Vehicle Image Category"
            options={imageCategoryOptions}
          />

          <FormSwitch<YachtFormValues>
            name="vehicle.images.0.isPrimary"
            label="Primary Vehicle Image"
          />

          <FormInput<YachtFormValues>
            name="vehicle.images.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          NOTICE IMAGES SUPPORT
      ====================================================== */}

      <FormSection title="Image Notice" description="Image related information">
        <div className="grid gap-6 md:grid-cols-2">
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
    </>
  );
}
