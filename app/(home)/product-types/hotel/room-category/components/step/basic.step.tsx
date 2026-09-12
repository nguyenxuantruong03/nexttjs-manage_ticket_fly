"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { RoomCategoryFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Room Category"
      description="Basic room category information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<RoomCategoryFormSchema>
          name="name"
          label="Name"
          placeholder="Deluxe Room"
        />

        <FormInput<RoomCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Spacious room category with premium amenities"
        />

        <FormIcon<RoomCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="bed-double"
        />
      </div>
    </FormSection>
  );
}