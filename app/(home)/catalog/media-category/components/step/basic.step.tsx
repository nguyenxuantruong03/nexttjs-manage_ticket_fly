"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { MediaCategoryFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Media Category"
      description="Basic media category information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaCategoryFormSchema>
          name="name"
          label="Name"
          placeholder="Hotel Exterior"
        />

        <FormInput<MediaCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Images showing the exterior of the hotel"
        />

        <FormIcon<MediaCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="image"
        />
      </div>
    </FormSection>
  );
}
