"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyDelayReasonFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly delay reason information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyDelayReasonFormSchema>
          name="name"
          label="Name"
          placeholder="Weather Delay"
        />

        <FormIcon<FlyDelayReasonFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyDelayReasonFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly delay reason"
          />
        </div>
      </div>
    </FormSection>
  );
}
