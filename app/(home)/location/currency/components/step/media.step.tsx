"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { CurrencyFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="Currency images and videos">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CurrencyFormSchema>
          name="thumbnail"
          label="Thumbnail URL"
        />

        <FormInput<CurrencyFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<CurrencyFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<CurrencyFormSchema>
          name="video"
          label="Video URL"
        />

        <FormInput<CurrencyFormSchema>
          name="images.0"
          label="Image URL"
        />
      </div>
    </FormSection>
  );
}