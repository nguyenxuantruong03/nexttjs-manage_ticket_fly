// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { BusImageCategory } from "@/types/bookings/bus/enums";
import { BusFormValues } from "../schema/core/bus.schema";

const imageCategoryOptions = Object.values(BusImageCategory).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ImagesStep() {
  return (
    <>
      <FormSection title="Bus Images" description="Bus gallery images">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues> name="images.0.url" label="Image URL" />

          <FormSelect<BusFormValues>
            name="images.0.category"
            label="Category"
            options={imageCategoryOptions}
          />

          <FormInput<BusFormValues> name="images.0.alt" label="Alt Text" />

          <FormInput<BusFormValues>
            name="images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<BusFormValues>
            name="images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}
