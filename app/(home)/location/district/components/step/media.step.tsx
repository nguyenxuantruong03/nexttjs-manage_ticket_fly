"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { DistrictFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="District images and videos">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<DistrictFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<DistrictFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<DistrictFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<DistrictFormSchema> name="video" label="Video URL" />

        <FormInput<DistrictFormSchema> name="images.0" label="Image URL" />
      </div>
    </FormSection>
  );
}
