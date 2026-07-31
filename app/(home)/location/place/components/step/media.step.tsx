"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { PlaceFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="Place images and media">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<PlaceFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<PlaceFormSchema> name="coverImage" label="Cover Image URL" />

        <FormInput<PlaceFormSchema> name="images.0" label="Image URL" />
      </div>
    </FormSection>
  );
}
