"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { FlyFareRuleTypeFormSchema } from "../form/schema";
import { FormIcon } from "@/components/form/form-data/FormIcon";

export default function BasicStep() {
  return (
    <FormSection
      title="Basic Information"
      description="Basic fly fare rule type information"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <FormInput<FlyFareRuleTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Refund Policy"
        />

        <FormIcon<FlyFareRuleTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormInput<FlyFareRuleTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the fly fare rule type"
          />
        </div>
      </div>
    </FormSection>
  );
}
