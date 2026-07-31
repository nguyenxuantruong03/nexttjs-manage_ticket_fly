"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { RoomViewFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Room View"
      description="Basic room view information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RoomViewFormSchema>
          name="name"
          label="Name"
          placeholder="Ocean View"
        />

        <FormInput<RoomViewFormSchema>
          name="description"
          label="Description"
          placeholder="Rooms overlooking the ocean"
        />

        <FormInput<RoomViewFormSchema>
          name="icon"
          label="Icon"
          placeholder="mountain"
        />
      </div>
    </FormSection>
  );
}