"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import { BookingItemTypeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection
      title="Status"
      description="Booking item type status configuration"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BookingItemTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<BookingItemTypeFormSchema>
          name="active"
          label="Active"
        />
      </div>
    </FormSection>
  );
}