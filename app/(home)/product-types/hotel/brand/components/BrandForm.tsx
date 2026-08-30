"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelBrand,
  useUpdateHotelBrand,
} from "@/hooks/product-types/hotel/hotel-brand";

import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

import { BrandFormSchema } from "./form/schema";

import { hotelBrandFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import SettingsStep from "./step/setting.step";

interface HotelBrandFormProps {
  initialData?: HotelBrand;

  redirect?: boolean;
}

export default function BrandForm({
  initialData,
  redirect = true,
}: HotelBrandFormProps) {
  const createHotelBrand = useCreateHotelBrand();

  const updateHotelBrand = useUpdateHotelBrand();

  return (
    <EntityFormWizard<BrandFormSchema, HotelBrand>
      initialData={initialData}
      redirect={redirect}
      config={hotelBrandFormConfig}
      createMutation={createHotelBrand}
      updateMutation={updateHotelBrand}
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
