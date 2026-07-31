"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { RoomMediaCategoryFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Room Media Category"
      description="Basic room media category information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RoomMediaCategoryFormSchema>
          name="name"
          label="Name"
          placeholder="Room Gallery"
        />

        <FormInput<RoomMediaCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Category for room images and media files"
        />

        <FormInput<RoomMediaCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="image"
        />
      </div>
    </FormSection>
  );
}