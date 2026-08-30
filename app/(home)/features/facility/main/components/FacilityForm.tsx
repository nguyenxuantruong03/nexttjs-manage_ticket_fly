"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateFacility,
  useUpdateFacility,
} from "@/hooks/features/facility";

import { BookingType } from "@/types/common/commerce/booking-type";

import { Facility } from "@/types/common/features/facility/facility";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { FacilityFormSchema } from "./form/schema";

import { facilityFormConfig } from "./config";

import BasicStep from "./step/basic.step";

import CategoryStep from "./step/category.step";

import StatusStep from "./step/status.step";

interface FacilityFormProps {
  initialData?: Facility;

  bookingTypeData: BookingType[];

  facilityCategoryData: FacilityCategory[];

  redirect?: boolean;
}

export default function FacilityForm({
  initialData,
  bookingTypeData,
  facilityCategoryData,
  redirect = true,
}: FacilityFormProps) {
  const createFacility = useCreateFacility();

  const updateFacility = useUpdateFacility();

  return (
    <EntityFormWizard<FacilityFormSchema, Facility>
      initialData={initialData}
      redirect={redirect}
      config={facilityFormConfig}
      createMutation={createFacility}
      updateMutation={updateFacility}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      <FormWizardStep index={1}>
        <CategoryStep
          facilityCategoryData={facilityCategoryData}
          bookingTypeData={bookingTypeData}
        />
      </FormWizardStep>

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
