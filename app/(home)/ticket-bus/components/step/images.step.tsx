// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";

import { BusImageCategory } from "@/types/bookings/bus/enums";
import { BusFormSchema } from "../schema/core/bus.schema";

const imageCategoryOptions = Object.values(BusImageCategory).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ImagesStep() {
  return (
    <>
      <FormSection title="Bus Images" description="Bus gallery images">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema> name="images.0.url" label="Image URL" />

          <FormSelect<BusFormSchema>
            name="images.0.category"
            label="Category"
            options={imageCategoryOptions}
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
