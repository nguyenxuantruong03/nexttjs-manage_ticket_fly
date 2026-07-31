"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { RoomTypeFormSchema } from "../form/schema";

export default function RoomStep() {
  return (
    <FormSection
      title="Room Information"
      description="Configure the physical specifications of the room"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RoomTypeFormSchema>
          name="roomSize"
          label="Room Size (m²)"
          type="number"
          placeholder="35"
        />

        <FormInput<RoomTypeFormSchema>
          name="bedCount"
          label="Bed Count"
          type="number"
          placeholder="1"
        />

        <FormInput<RoomTypeFormSchema>
          name="bathroomCount"
          label="Bathroom Count"
          type="number"
          placeholder="1"
        />

        <FormInput<RoomTypeFormSchema>
          name="floor"
          label="Floor"
          type="number"
          placeholder="5"
        />
      </div>
    </FormSection>
  );
}