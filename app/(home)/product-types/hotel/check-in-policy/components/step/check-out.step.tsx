"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { HotelCheckInPolicySchemaForm } from "../form/schema";

export default function CheckOutStep() {
  return (
    <FormSection
      title="Check-Out"
      description="Configure the hotel's check-out time and age requirements"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<HotelCheckInPolicySchemaForm>
          name="checkOutUntil"
          label="Check-Out Until"
          placeholder="12:00"
        />

        <FormInput<HotelCheckInPolicySchemaForm>
          name="minimumAge"
          label="Minimum Age"
          placeholder="18"
          type="number"
        />
      </div>
    </FormSection>
  );
}