"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelRatePlanType,
  useUpdateHotelRatePlanType,
} from "@/hooks/product-types/hotel/hotel-rate-plan-type";

import SettingsStep from "./step/setting.step";

import BasicStep from "./step/basic.step";

import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

import { RatePlanTypeFormSchema } from "./form/schema";

import { ratePlanTypeFormConfig } from "./config";

interface RatePlanTypeFormProps {
  initialData?: HotelRatePlanType;

  redirect?: boolean;
}

export default function RatePlanTypeForm({
  initialData,

  redirect = true,
}: RatePlanTypeFormProps) {
  const createRatePlanType = useCreateHotelRatePlanType();

  const updateRatePlanType = useUpdateHotelRatePlanType();

  return (
    <EntityFormWizard<RatePlanTypeFormSchema, HotelRatePlanType>
      initialData={initialData}
      redirect={redirect}
      config={ratePlanTypeFormConfig}
      createMutation={createRatePlanType}
      updateMutation={updateRatePlanType}
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
