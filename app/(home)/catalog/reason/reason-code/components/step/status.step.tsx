"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { ReasonCodeFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Reason code configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<ReasonCodeFormSchema> name="isActive" label="Active" />

        <FormInput<ReasonCodeFormSchema>
          name="severity"
          label="Severity"
          type="number"
          placeholder="1"
        />
      </div>
    </FormSection>
  );
}
