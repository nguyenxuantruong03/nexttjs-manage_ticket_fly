"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="City images and videos">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<CityFormSchema> name="coverImage" label="Cover Image URL" />

        <FormInput<CityFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<CityFormSchema> name="video" label="Video URL" />

        <FormInput<CityFormSchema> name="images.0" label="Image URL" />
      </div>
    </FormSection>
  );
}
