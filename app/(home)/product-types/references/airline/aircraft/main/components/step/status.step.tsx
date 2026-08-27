"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";
import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly aircraft configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlyAircraftFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
