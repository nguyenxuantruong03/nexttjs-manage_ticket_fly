"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { RoomTypeFormSchema } from "../form/schema";

export default function CapacityStep() {
  return (
    <FormSection
      title="Capacity"
      description="Configure the maximum occupancy for this room type"
    >
      <div className="grid gap-6 md:grid-cols-3">
        <FormInput<RoomTypeFormSchema>
          name="maxGuests"
          label="Max Guests"
          type="number"
          placeholder="4"
        />

        <FormInput<RoomTypeFormSchema>
          name="maxAdults"
          label="Max Adults"
          type="number"
          placeholder="2"
        />

        <FormInput<RoomTypeFormSchema>
          name="maxChildren"
          label="Max Children"
          type="number"
          placeholder="2"
        />
      </div>
    </FormSection>
  );
}