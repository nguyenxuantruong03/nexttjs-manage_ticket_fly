"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";

export default function ImagesStep() {
  return (
    <FormSection title="Images" description="Flight images">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFormSchema> name="images.0.mediaId" label="Media ID" />
        <FormInput<FlyFormSchema> name="images.0.categoryId" label="Category ID" />
        <FormInput<FlyFormSchema> name="images.0.sortOrder" label="Sort Order" type="number" />
        <FormSwitch<FlyFormSchema> name="images.0.isPrimary" label="Primary Image" />
      </div>
    </FormSection>
  );
}
