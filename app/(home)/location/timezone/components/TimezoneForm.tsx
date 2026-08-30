"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateTimezone,
  useUpdateTimezone,
} from "@/hooks/location/timezone";

import { Timezone } from "@/types/location/timezone";

import { TimezoneFormSchema } from "./form/schema";

import { timezoneFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import LocationStep from "./step/status.step";

interface TimezoneFormProps {
  initialData?: Timezone;

  redirect?: boolean;
}

export default function TimezoneForm({
  initialData,

  redirect = true,
}: TimezoneFormProps) {
  const createTimezone = useCreateTimezone();

  const updateTimezone = useUpdateTimezone();

  return (
    <EntityFormWizard<TimezoneFormSchema, Timezone>
      initialData={initialData}
      redirect={redirect}
      config={timezoneFormConfig}
      createMutation={createTimezone}
      updateMutation={updateTimezone}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <LocationStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}