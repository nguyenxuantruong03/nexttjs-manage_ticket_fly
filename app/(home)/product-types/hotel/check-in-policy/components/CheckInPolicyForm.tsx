"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelCheckInPolicy,
  useUpdateHotelCheckInPolicy,
} from "@/hooks/product-types/hotel/hotel-check-in-policy";

import { HotelCheckInPolicySchemaForm } from "./form/schema";

import { hotelCheckInPolicyFormConfig } from "./config";

import CheckOutStep from "./step/check-out.step";

import CheckInStep from "./step/check-in.step";

import BasicStep from "./step/basic.step";

import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

interface HotelCheckInPolicyFormProps {
  initialData?: HotelCheckInPolicy;

  hotelData: Hotel[];

  redirect?: boolean;
}

export default function HotelCheckInPolicyForm({
  initialData,
  hotelData,
  redirect = true,
}: HotelCheckInPolicyFormProps) {
  const createHotelCheckInPolicy = useCreateHotelCheckInPolicy();

  const updateHotelCheckInPolicy = useUpdateHotelCheckInPolicy();

  return (
    <EntityFormWizard<HotelCheckInPolicySchemaForm, HotelCheckInPolicy>
      initialData={initialData}
      redirect={redirect}
      config={hotelCheckInPolicyFormConfig}
      createMutation={createHotelCheckInPolicy}
      updateMutation={updateHotelCheckInPolicy}
    >
      <FormWizardStep index={0}>
        <BasicStep hotelData={hotelData} />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <CheckInStep />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <CheckOutStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
