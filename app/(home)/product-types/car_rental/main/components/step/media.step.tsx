// step/medias.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";

export default function MediasStep() {
  return (
    <>
      <FormSection title="Media" description="Rental photos and media gallery">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="medias.0.mediaId"
            label="Media ID"
          />

          <FormInput<CarRentalFormSchema>
            name="medias.0.categoryId"
            label="Category ID"
          />

          <FormSwitch<CarRentalFormSchema>
            name="medias.0.isPrimary"
            label="Is Primary"
          />

          <FormInput<CarRentalFormSchema>
            name="medias.0.sortOrder"
            label="Sort Order"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
