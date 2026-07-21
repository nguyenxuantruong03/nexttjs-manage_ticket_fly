"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="City images and videos">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CityFormValues> name="thumbnail" label="Thumbnail URL" />

        <FormInput<CityFormValues> name="coverImage" label="Cover Image URL" />

        <FormInput<CityFormValues>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<CityFormValues> name="video" label="Video URL" />

        <FormInput<CityFormValues> name="images.0" label="Image URL" />
      </div>
    </FormSection>
  );
}
