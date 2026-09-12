"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import { BookingItemTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Booking Item Type"
      description="Basic booking item type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BookingItemTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Enter booking item type name"
        />

        <FormIcon<BookingItemTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<BookingItemTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the booking item type..."
          />
        </div>
      </div>
    </FormSection>
  );
}