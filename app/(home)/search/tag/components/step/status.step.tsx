"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";
import { SearchTagFormSchema } from "../form/schema";



export default function StatusStep() {
  return (
    <FormSection title="Status" description="Tag configuration">
      <FormSwitch<SearchTagFormSchema> name="active" label="Active" />
    </FormSection>
  );
}
