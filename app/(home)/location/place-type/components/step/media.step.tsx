"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PlaceTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function MediaStep() {
  return (
    <FormSection
      title="Media"
      description="Place type icons and images"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormIcon<PlaceTypeFormSchema>
          name="icon"
          label="Icon URL"
          placeholder="https://example.com/icons/landmark.svg"
        />

        <FormInput<PlaceTypeFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
          placeholder="https://example.com/images/landmark.jpg"
        />
      </div>
    </FormSection>
  );
}