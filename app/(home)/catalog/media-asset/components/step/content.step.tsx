"use client";

import FormSection from "@/components/form/FormSection";

import FormInput from "@/components/form/form-data/FormInput";

import { MediaAssetFormSchema } from "../form/schema";

export default function ContentStep() {
  return (
    <FormSection
      title="Content"
      description="Add accessibility and descriptive information for this media asset"
    >
      <div className="grid gap-6">
        <FormInput<MediaAssetFormSchema>
          name="alt"
          label="Alt Text"
          placeholder="Describe the media for accessibility"
        />

        <FormInput<MediaAssetFormSchema>
          name="caption"
          label="Caption"
          placeholder="Enter a caption for this media asset"
        />
      </div>
    </FormSection>
  );
}
