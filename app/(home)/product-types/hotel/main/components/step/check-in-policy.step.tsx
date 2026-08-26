"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";

export default function CheckInCheckOutStep() {
  return (
    <FormSection
      title="Check-In & Check-Out"
      description="Configure check-in, check-out and minimum age requirements"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<HotelSchemaForm>
          name="checkinPolicy.checkInFrom"
          label="Check-In From"
          placeholder="14:00"
        />

        <FormInput<HotelSchemaForm>
          name="checkinPolicy.checkInUntil"
          label="Check-In Until"
          placeholder="22:00"
        />

        <FormInput<HotelSchemaForm>
          name="checkinPolicy.checkOutUntil"
          label="Check-Out Until"
          placeholder="12:00"
        />

        <FormInput<HotelSchemaForm>
          name="checkinPolicy.minimumAge"
          label="Minimum Age"
          placeholder="18"
          type="number"
        />
      </div>
    </FormSection>
  );
}