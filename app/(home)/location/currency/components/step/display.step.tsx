"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput } from "@/components/form/form-data";
import { CurrencyFormSchema } from "../form/schema";

export default function DisplayStep() {
  return (
    <FormSection title="Display" description="Currency display information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<CurrencyFormSchema>
          name="flagEmoji"
          label="Flag Emoji"
          placeholder="🇺🇸"
        />

        <FormInput<CurrencyFormSchema>
          name="locale"
          label="Locale"
          placeholder="en-US"
        />
      </div>
    </FormSection>
  );
}
