"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { MediaCategoryFormSchema } from "../form/schema";

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
          placeholder="Hotel Gallery"
        />

        <FormInput<MediaCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Category for hotel images and media files"
        />

        <FormInput<MediaCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="image"
        />
      </div>
    </FormSection>
  );
}
