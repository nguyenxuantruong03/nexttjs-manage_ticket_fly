"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateMediaCategory,
  useUpdateMediaCategory,
} from "@/hooks/catalog/media-category";

import { BookingType } from "@/types/common/commerce/booking-type";

import { MediaCategory } from "@/types/common/catalog/media-category";

import { MediaCategoryFormSchema } from "./form/schema";

import BasicStep from "./step/basic.step";

import BookingTypeStep from "./step/booking-type.step";

import StatusStep from "./step/status.step";

import { mediaCategoryFormConfig } from "./config";

// ======================================================
// PROPS
// ======================================================

interface MediaCategoryFormProps {
  initialData?: MediaCategory;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function MediaCategoryForm({
  initialData,

  bookingTypeData,

  redirect = true,
}: MediaCategoryFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createMediaCategory = useCreateMediaCategory();

  const updateMediaCategory = useUpdateMediaCategory();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<MediaCategoryFormSchema, MediaCategory>
      initialData={initialData}
      redirect={redirect}
      config={mediaCategoryFormConfig}
      createMutation={createMediaCategory}
      updateMutation={updateMediaCategory}
    >
      {/* ======================================================
          STEP 0 - BASIC
      ====================================================== */}

      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - BOOKING TYPE
      ====================================================== */}

      <FormWizardStep index={1}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>

      {/* ======================================================
          STEP 2 - STATUS
      ====================================================== */}

      <FormWizardStep index={2}>
        <StatusStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
