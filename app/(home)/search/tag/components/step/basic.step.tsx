"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";

import { SearchTagFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Tag" description="Basic tag information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<SearchTagFormSchema>
          name="name"
          label="Name"
          placeholder="Luxury"
        />
      </div>
    </FormSection>
  );
}
