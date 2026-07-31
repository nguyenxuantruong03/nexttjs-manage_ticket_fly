"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import { MediaAssetFormSchema } from "../form/schema";

import { MediaType } from "@/types/bookings/hotel/enum/enums";

const mediaTypeOptions = Object.values(MediaType).map((value) => ({
  label: value.replaceAll("_", " "),
  value,
}));

export default function StorageStep() {
  return (
    <FormSection
      title="Storage"
      description="Media storage information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="url"
          label="URL"
          placeholder="https://cdn.example.com/image.jpg"
        />

        <FormInput<MediaAssetFormSchema>
          name="thumbnailUrl"
          label="Thumbnail URL"
          placeholder="https://cdn.example.com/thumb.jpg"
        />

        <FormInput<MediaAssetFormSchema>
          name="path"
          label="Storage Path"
          placeholder="uploads/hotel/image.jpg"
        />

        <FormSelect<MediaAssetFormSchema>
          name="type"
          label="Media Type"
          placeholder="Select media type"
          options={mediaTypeOptions}
        />
      </div>
    </FormSection>
  );
}