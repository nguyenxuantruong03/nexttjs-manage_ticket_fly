"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFacilityCategory,
  useUpdateFacilityCategory,
} from "@/hooks/features/facility-category";

import { BookingType } from "@/types/common/commerce/booking-type";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { FacilityCategoryFormSchema } from "./form/schema";

import { facilityCategoryFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

interface FacilityCategoryFormProps {
  initialData?: FacilityCategory;
  bookingTypeData: BookingType[];
  redirect?: boolean;
}

export default function FacilityCategoryForm({
  initialData,
  bookingTypeData,
  redirect = true,
}: FacilityCategoryFormProps) {
  const createFacilityCategory = useCreateFacilityCategory();

  const updateFacilityCategory = useUpdateFacilityCategory();

  return (
    <EntityFormWizard<FacilityCategoryFormSchema, FacilityCategory>
      initialData={initialData}
      redirect={redirect}
      config={facilityCategoryFormConfig}
      createMutation={createFacilityCategory}
      updateMutation={updateFacilityCategory}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
