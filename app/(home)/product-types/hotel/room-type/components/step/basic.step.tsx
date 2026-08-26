"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormTextarea } from "@/components/form/form-data";

import { RoomTypeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic room type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RoomTypeFormSchema>
          name="code"
          label="Code"
          placeholder="DLX-KING"
        />

        <FormInput<RoomTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Deluxe King Room"
        />
      </div>

      <FormTextarea<RoomTypeFormSchema>
        name="description"
        label="Description"
        placeholder="Describe the room type..."
        rows={4}
      />
    </FormSection>
  );
}
