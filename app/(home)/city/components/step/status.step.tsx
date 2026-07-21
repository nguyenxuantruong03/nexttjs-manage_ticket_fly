"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch, FormSelect } from "@/components/form/form-data";

import { CityFormValues } from "../form/schema";

import { CityStatus } from "@/types/bookings/location/city";

const statusOptions = Object.values(CityStatus).map((value) => ({
  label: value.replaceAll("_", " "),
  value,
}));

export default function StatusStep() {
  return (
    <FormSection title="Status" description="City visibility settings">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<CityFormValues> name="verified" label="Verified" />

        <FormSelect<CityFormValues>
          name="status"
          label="Status"
          options={statusOptions}
        />
      </div>
    </FormSection>
  );
}
