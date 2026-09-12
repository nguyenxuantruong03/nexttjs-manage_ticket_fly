"use client";

import FormSection from "@/components/form/FormSection";
import FormInput from "@/components/form/form-data/FormInput";

import { MediaAssetFormSchema } from "../form/schema";

export default function FileInfoStep() {
  return (
    <FormSection
      title="File Information"
      description="Technical information is automatically detected from the uploaded file"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="type"
          label="Media Type"
          placeholder="Automatically detected"
        />

        <FormInput<MediaAssetFormSchema>
          name="size"
          label="File Size"
          type="number"
          placeholder="Automatically detected"
        />

        <FormInput<MediaAssetFormSchema>
          name="width"
          label="Width"
          type="number"
          placeholder="Automatically detected"
        />

        <FormInput<MediaAssetFormSchema>
          name="height"
          label="Height"
          type="number"
          placeholder="Automatically detected"
        />

        <FormInput<MediaAssetFormSchema>
          name="duration"
          label="Duration"
          type="number"
          placeholder="Automatically detected"
        />
      </div>
    </FormSection>
  );
}
