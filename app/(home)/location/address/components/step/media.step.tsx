"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { AddressFormSchema } from "../form/schema";

export default function MediaStep() {
  return (
    <FormSection title="Media" description="Address images and videos">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<AddressFormSchema> name="thumbnail" label="Thumbnail URL" />

        <FormInput<AddressFormSchema>
          name="coverImage"
          label="Cover Image URL"
        />

        <FormInput<AddressFormSchema>
          name="bannerImage"
          label="Banner Image URL"
        />

        <FormInput<AddressFormSchema> name="video" label="Video URL" />

        <FormInput<AddressFormSchema> name="images.0" label="Image URL" />
      </div>
    </FormSection>
  );
}
