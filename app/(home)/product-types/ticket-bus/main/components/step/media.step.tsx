// step/media.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";

export default function MediaStep() {
  return (
    <>
      <FormSection title="Bus Gallery" description="Bus-level images">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="images.0.mediaId"
            label="Media ID"
          />

          <FormInput<BusFormSchema>
            name="images.0.categoryId"
            label="Category ID"
          />

          <FormInput<BusFormSchema> name="images.0.alt" label="Alt Text" />

          <FormInput<BusFormSchema>
            name="images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<BusFormSchema>
            name="images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}