// step/images.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import {
  FormInput,
  FormSelect,
  FormSwitch,
} from "@/components/form/form-data";

import { HotelImageCategory } from "@/types/bookings/hotel/enum/enums";

import { HotelFormSchema } from "../schema";

const imageCategoryOptions = Object.values(HotelImageCategory).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ImagesStep() {
  return (
    <FormSection
      title="Hotel Images"
      description="Manage hotel gallery"
    >
      <div className="space-y-8">
        <div className="rounded-lg border p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <FormInput<HotelFormSchema>
              name="hotelImage.0.url"
              label="Image URL"
              placeholder="https://example.com/image.jpg"
            />

            <FormSelect<HotelFormSchema>
              name="hotelImage.0.category"
              label="Category"
              options={imageCategoryOptions}
            />

            <FormInput<HotelFormSchema>
              name="hotelImage.0.sortOrder"
              label="Sort Order"
              type="number"
            />

            <FormSwitch<HotelFormSchema>
              name="hotelImage.0.isPrimary"
              label="Primary Image"
            />
          </div>
        </div>
      </div>
    </FormSection>
  );
}