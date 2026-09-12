"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateMediaAsset,
  useUpdateMediaAsset,
} from "@/hooks/catalog/media-asset";

import { BookingType } from "@/types/common/commerce/booking-type";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { MediaAssetFormSchema } from "./form/schema";

import StorageStep from "./step/storage.step";

import ContentStep from "./step/content.step";

import BookingTypeStep from "./step/booking-type.step";

import {
  mediaAssetFormConfig,
  MediaAssetUpdateInput,
  MediaAssetCreateInput,
} from "./config";
import FileInfoStep from "./step/fileInfo.step";

// ======================================================
// PROPS
// ======================================================

interface MediaAssetFormProps {
  initialData?: MediaAsset;

  bookingTypeData: BookingType[];

  redirect?: boolean;
}

// ======================================================
// COMPONENT
// ======================================================

export default function MediaAssetForm({
  initialData,

  bookingTypeData,

  redirect = true,
}: MediaAssetFormProps) {
  // ======================================================
  // MUTATIONS
  // ======================================================

  const createMediaAsset = useCreateMediaAsset();
  const updateMediaAsset = useUpdateMediaAsset();

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityFormWizard<
      MediaAssetFormSchema,
      MediaAsset,
      MediaAssetCreateInput,
      MediaAssetUpdateInput
    >
      initialData={initialData}
      redirect={redirect}
      config={mediaAssetFormConfig}
      createMutation={createMediaAsset}
      updateMutation={updateMediaAsset}
    >
      {/* ======================================================
          STEP 0 - STORAGE
      ====================================================== */}

      <FormWizardStep index={0}>
        <StorageStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 1 - FILE INFORMATION
      ====================================================== */}

      <FormWizardStep index={1}>
        <FileInfoStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 2 - CONTENT
      ====================================================== */}

      <FormWizardStep index={2}>
        <ContentStep />
      </FormWizardStep>

      {/* ======================================================
          STEP 3 - BOOKING TYPE
      ====================================================== */}

      <FormWizardStep index={3}>
        <BookingTypeStep bookingTypeData={bookingTypeData} />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
