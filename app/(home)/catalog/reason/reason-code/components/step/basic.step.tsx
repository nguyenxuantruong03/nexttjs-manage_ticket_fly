"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { ReasonCodeFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection
      title="Reason Code"
      description="Basic reason code information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<ReasonCodeFormSchema>
          name="code"
          label="Code"
          placeholder="SPAM_MESSAGE"
        />

        <FormInput<ReasonCodeFormSchema>
          name="title"
          label="Title"
          placeholder="Spam message"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-1">
        <FormInput<ReasonCodeFormSchema>
          name="description"
          label="Description"
          placeholder="Detailed description"
        />
      </div>
    </FormSection>
  );
}
