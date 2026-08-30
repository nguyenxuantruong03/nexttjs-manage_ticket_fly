"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateContinent,
  useUpdateContinent,
} from "@/hooks/location/country/continent";

import { Continent } from "@/types/location/country/continent.type";

import { ContinentFormSchema } from "./form/schema";

import { continentFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import MediaStep from "./step/media.step";

import DisplayStep from "./step/display.step";

import StatusStep from "./step/status.step";

interface ContinentFormProps {
  initialData?: Continent;

  redirect?: boolean;
}

export default function ContinentForm({
  initialData,

  redirect = true,
}: ContinentFormProps) {
  const createContinent = useCreateContinent();

  const updateContinent = useUpdateContinent();

  return (
    <EntityFormWizard<ContinentFormSchema, Continent>
      initialData={initialData}
      redirect={redirect}
      config={continentFormConfig}
      createMutation={createContinent}
      updateMutation={updateContinent}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <MediaStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <DisplayStep />
      </FormWizardStep>

      <FormWizardStep index={3}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
