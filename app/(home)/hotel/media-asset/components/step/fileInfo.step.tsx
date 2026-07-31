"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { MediaAssetFormSchema } from "../form/schema";

export default function FileInfoStep() {
  return (
    <FormSection
      title="File Information"
      description="File metadata and dimensions"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="mimeType"
          label="MIME Type"
          placeholder="image/jpeg"
        />

        <FormInput<MediaAssetFormSchema>
          name="size"
          label="File Size (bytes)"
          type="number"
          placeholder="1024000"
        />

        <FormInput<MediaAssetFormSchema>
          name="width"
          label="Width"
          type="number"
          placeholder="1920"
        />

        <FormInput<MediaAssetFormSchema>
          name="height"
          label="Height"
          type="number"
          placeholder="1080"
        />
      </div>
    </FormSection>
  );
}
