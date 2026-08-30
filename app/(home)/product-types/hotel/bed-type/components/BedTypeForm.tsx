"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelBedType,
  useUpdateHotelBedType,
} from "@/hooks/product-types/hotel/hotel-bed-type";

import { BedType } from "@/types/product-types/hotel/room/room.types";

import { BedTypeFormSchema } from "./form/schema";

import { bedTypeFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import SettingsStep from "./step/setting.step";

interface BedTypeFormProps {
  initialData?: BedType;

  redirect?: boolean;
}

export default function BedTypeForm({
  initialData,
  redirect = true,
}: BedTypeFormProps) {
  const createBedType = useCreateHotelBedType();

  const updateBedType = useUpdateHotelBedType();

  return (
    <EntityFormWizard<BedTypeFormSchema, BedType>
      initialData={initialData}
      redirect={redirect}
      config={bedTypeFormConfig}
      createMutation={createBedType}
      updateMutation={updateBedType}
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