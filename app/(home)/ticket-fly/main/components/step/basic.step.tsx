// step/basic.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";
import { FlyFormSchema } from "../schema/core/fly.schema";

export default function BasicStep() {
  return (
    <>
      <FormSection
        title="Basic Information"
        description="Basic flight information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<FlyFormSchema> name="name" label="Flight Name" />
          <FormSwitch<FlyFormSchema> name="active" label="Active" />
        </div>
      </FormSection>
    </>
  );
}
