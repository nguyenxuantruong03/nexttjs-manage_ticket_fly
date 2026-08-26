"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { WardFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="Ward images and videos">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<WardFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
        />

        <FormInput<WardFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<WardFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<WardFormSchema>
          name="video"
          label="Video URL"
        />

        <FormInput<WardFormSchema>
          name="images.0"
          label="Image URL"
        />
      </div>
    </FormSection>
  );
}