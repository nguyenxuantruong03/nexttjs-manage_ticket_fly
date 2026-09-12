"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BedTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection title="Bed Type" description="Basic bed type information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BedTypeFormSchema>
          name="name"
          label="Name"
          placeholder="King Bed"
        />

        <FormInput<BedTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Large bed suitable for two adults"
        />

        <FormIcon<BedTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="bed"
        />
      </div>
    </FormSection>
  );
}
