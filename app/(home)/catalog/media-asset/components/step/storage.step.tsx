"use client";

import FormSection from "@/components/form/FormSection";
import { FormImageUpload } from "@/components/form/form-data";

import { MediaAssetFormSchema } from "../form/schema";

export default function StorageStep() {
  return (
    <FormSection
      title="Storage"
      description="Upload the media asset to storage"
    >
      <div className="grid gap-6">
        <FormImageUpload<MediaAssetFormSchema>
          name="path"
          label="Media"
          folder="storage-image/media/originals"
          multiple
          maxFiles={20}
        />
      </div>
    </FormSection>
  );
}
