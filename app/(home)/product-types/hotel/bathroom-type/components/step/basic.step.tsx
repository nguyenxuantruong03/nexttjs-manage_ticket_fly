"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BathroomTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Bathroom Type"
      description="Basic bathroom type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<BathroomTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Private Bathroom"
        />

        <FormInput<BathroomTypeFormSchema>
          name="description"
          label="Description"
          placeholder="Private bathroom attached to the room"
        />

        <FormIcon<BathroomTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="bath"
        />
      </div>
    </FormSection>
  );
}
