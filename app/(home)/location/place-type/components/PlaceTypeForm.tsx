"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreatePlaceType,
  useUpdatePlaceType,
} from "@/hooks/location/place/place-type";

import { PlaceType } from "@/types/location/place/place-type.type";

import { PlaceTypeFormSchema } from "./form/schema";

import { placeTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import MediaStep from "./step/media.step";

import DisplayStep from "./step/display.step";

import StatusStep from "./step/status.step";

interface PlaceTypeFormProps {
  initialData?: PlaceType;

  redirect?: boolean;
}

export default function PlaceTypeForm({
  initialData,

  redirect = true,
}: PlaceTypeFormProps) {
  const createPlaceType = useCreatePlaceType();

  const updatePlaceType = useUpdatePlaceType();

  return (
    <EntityFormWizard<PlaceTypeFormSchema, PlaceType>
      initialData={initialData}
      redirect={redirect}
      config={placeTypeFormConfig}
      createMutation={createPlaceType}
      updateMutation={updatePlaceType}
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