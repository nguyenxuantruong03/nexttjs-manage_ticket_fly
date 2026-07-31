"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { SearchTagFormSchema } from "../form/schema";
import { TagType } from "@/types/bookings/search/tag.types";

const tagTypeOptions = Object.values(TagType).map((value) => ({
  label: value.replace(/_/g, " "),
  value,
}));

export default function BasicStep() {
  return (
    <FormSection title="Tag" description="Basic tag information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<SearchTagFormSchema>
          name="name"
          label="Name"
          placeholder="Luxury"
        />

        <FormSelect<SearchTagFormSchema>
          name="type"
          label="Tag Type"
          placeholder="Select tag type"
          options={tagTypeOptions}
        />
      </div>
    </FormSection>
  );
}
