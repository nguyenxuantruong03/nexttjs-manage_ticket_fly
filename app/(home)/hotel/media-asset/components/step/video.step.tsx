"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { MediaAssetFormSchema } from "../form/schema";

export default function VideoStep() {
  return (
    <FormSection
      title="Video"
      description="Configure video-specific information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="duration"
          label="Duration (seconds)"
          type="number"
          placeholder="120"
        />
      </div>
    </FormSection>
  );
}