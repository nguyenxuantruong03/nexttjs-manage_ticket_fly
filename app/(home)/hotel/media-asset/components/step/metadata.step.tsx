"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { MediaAssetFormSchema } from "../form/schema";

export default function MetadataStep() {
  return (
    <FormSection title="Metadata" description="Configure media metadata">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="alt"
          label="Alt Text"
          placeholder="Hotel exterior view"
        />

        <FormInput<MediaAssetFormSchema>
          name="caption"
          label="Caption"
          placeholder="Main entrance of the hotel"
        />
      </div>
    </FormSection>
  );
}
