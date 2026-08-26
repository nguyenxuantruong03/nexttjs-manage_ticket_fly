// step/media.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";

export default function MediaStep() {
  return (
    <>
      {/* ======================================================
          HOTEL MEDIA
      ====================================================== */}

      <FormSection title="Gallery" description="Hotel photos & media">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelSchemaForm>
            name="medias.0.mediaId"
            label="Media"
            placeholder="Search media..."
          />

          <FormInput<HotelSchemaForm>
            name="medias.0.categoryId"
            label="Category"
            placeholder="Search category..."
          />

          <FormInput<HotelSchemaForm>
            name="medias.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="medias.0.isPrimary"
            label="Primary"
            description="Use as the main hotel image"
          />
        </div>
      </FormSection>
    </>
  );
}
