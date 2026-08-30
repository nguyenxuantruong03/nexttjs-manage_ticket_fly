"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelBathroomType,
  useUpdateHotelBathroomType,
} from "@/hooks/product-types/hotel/hotel-bathroom-type";

import { BathroomType } from "@/types/product-types/hotel/room/room.types";

import { BathroomTypeFormSchema } from "./form/schema";

import { bathroomTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";
import SettingsStep from "./step/setting.step.tsx";


interface BathroomTypeFormProps {
  initialData?: BathroomType;

  redirect?: boolean;
}

export default function BathroomTypeForm({
  initialData,

  redirect = true,
}: BathroomTypeFormProps) {
  const createBathroomType = useCreateHotelBathroomType();

  const updateBathroomType = useUpdateHotelBathroomType();

  return (
    <EntityFormWizard<BathroomTypeFormSchema, BathroomType>
      initialData={initialData}
      redirect={redirect}
      config={bathroomTypeFormConfig}
      createMutation={createBathroomType}
      updateMutation={updateBathroomType}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <SettingsStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}