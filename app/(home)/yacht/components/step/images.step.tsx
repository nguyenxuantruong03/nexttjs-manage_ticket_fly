// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import { YachtImageCategory } from "@/types/bookings/yacht/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

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
          <FormInput<YachtFormSchema> name="image.0.url" label="Image URL" />

          <FormSelect<YachtFormSchema>
            name="image.0.category"
            label="Image Category"
            options={imageCategoryOptions}
          />

          <FormSwitch<YachtFormSchema>
            name="image.0.isPrimary"
            label="Primary Image"
          />

          <FormInput<YachtFormSchema>
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
          <FormInput<YachtFormSchema>
            name="vehicle.images.0.url"
            label="Vehicle Image URL"
          />

          <FormSelect<YachtFormSchema>
            name="vehicle.images.0.category"
            label="Vehicle Image Category"
            options={imageCategoryOptions}
          />

          <FormSwitch<YachtFormSchema>
            name="vehicle.images.0.isPrimary"
            label="Primary Vehicle Image"
          />

          <FormInput<YachtFormSchema>
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
    </>
  );
}
