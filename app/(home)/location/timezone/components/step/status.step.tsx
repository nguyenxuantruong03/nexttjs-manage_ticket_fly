"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox } from "@/components/form/form-data";

import { TimezoneFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Timezone status settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormCheckbox<TimezoneFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
