"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { BookingTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Booking Type"
      description="Basic booking type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BookingTypeFormSchema>
          name="code"
          label="Code"
          placeholder="HOTEL"
        />

        <FormInput<BookingTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Hotel"
        />

        <div className="md:col-span-2">
          <FormTextarea<BookingTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the booking type..."
          />
        </div>
      </div>
    </FormSection>
  );
}