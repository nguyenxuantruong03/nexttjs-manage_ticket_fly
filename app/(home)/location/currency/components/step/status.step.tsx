"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";
import { CurrencyFormSchema } from "../form/schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Currency configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CurrencyFormSchema> name="active" label="Active" />

        <FormSwitch<CurrencyFormSchema> name="isDefault" label="Default Currency" />
      </div>
    </FormSection>
  );
}
