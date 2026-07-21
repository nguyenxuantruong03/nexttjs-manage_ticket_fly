// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSwitch,
  FormSelect,
} from "@/components/form/form-data";


import {
  FlyImageCategory,
} from "@/types/bookings/ticket-fly/enums";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

const imageCategoryOptions = Object.values(FlyImageCategory).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function ImagesStep() {
  return (
    <FormSection
      title="Images"
      description="Flight and airline images"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TicketFlyFormValues>
          name="images.0.url"
          label="Image URL"
        />

        <FormSelect<TicketFlyFormValues>
          name="images.0.category"
          label="Category"
          options={imageCategoryOptions}
        />

        <FormInput<TicketFlyFormValues>
          name="images.0.alt"
          label="Alt Text"
        />

        <FormInput<TicketFlyFormValues>
          name="images.0.sortOrder"
          label="Sort Order"
          type="number"
        />

        <FormSwitch<TicketFlyFormValues>
          name="images.0.isPrimary"
          label="Primary Image"
        />
      </div>
    </FormSection>
  );
}