"use client";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";
import { FlyAirlineFormSchema } from "../schema/airline.schema";


export default function StatusStep() {
  return (
    <FormSection title="Status" description="Fly airline configuration">
      <div className="grid gap-6 md:grid-cols-2">
        <FormSwitch<FlyAirlineFormSchema> name="active" label="Active" />
      </div>
    </FormSection>
  );
}
