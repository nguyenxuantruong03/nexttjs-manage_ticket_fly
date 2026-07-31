"use client";

import FormSection from "@/components/form/FormSection";
import { FormCheckbox, FormInput } from "@/components/form/form-data";

import { TimezoneFormSchema } from "../form/schema";

export default function BasicStep() {
  return (
    <FormSection title="Timezone" description="Basic timezone information">
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<TimezoneFormSchema>
          name="name"
          label="Timezone Name"
          placeholder="Asia/Ho_Chi_Minh"
        />

        <FormInput<TimezoneFormSchema>
          name="displayName"
          label="Display Name"
          placeholder="Indochina Time"
        />

        <FormInput<TimezoneFormSchema>
          name="abbreviation"
          label="Abbreviation"
          placeholder="ICT"
        />

        <FormInput<TimezoneFormSchema>
          name="utcOffset"
          label="UTC Offset"
          placeholder="+07:00"
        />

        <FormInput<TimezoneFormSchema>
          name="utcOffsetMinutes"
          label="UTC Offset Minutes"
          type="number"
          placeholder="420"
        />

        <FormCheckbox<TimezoneFormSchema>
          name="daylightSaving"
          label="Daylight Saving"
        />
      </div>
    </FormSection>
  );
}
