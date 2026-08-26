"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { HotelCheckInPolicySchemaForm } from "../form/schema";

export default function CheckInStep() {
  return (
    <FormSection
      title="Check-In"
      description="Configure the hotel's check-in time"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<HotelCheckInPolicySchemaForm>
          name="checkInFrom"
          label="Check-In From"
          placeholder="14:00"
        />

        <FormInput<HotelCheckInPolicySchemaForm>
          name="checkInUntil"
          label="Check-In Until"
          placeholder="22:00"
        />
      </div>
    </FormSection>
  );
}
