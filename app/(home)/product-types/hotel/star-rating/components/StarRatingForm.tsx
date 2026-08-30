"use client";

import EntityFormWizard from "@/components/form/wizard/EntityFormWizard";

import FormWizardStep from "@/components/form/wizard/FormWizardStep";

import {
  useCreateHotelStarRating,
  useUpdateHotelStarRating,
} from "@/hooks/product-types/hotel/hotel-star-rating";

import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

import { StarRatingFormSchema } from "./form/schema";

import { starRatingFormConfig } from "./config";

import BasicStep from "./step/basic.step";

interface StarRatingFormProps {
  initialData?: HotelStarRating;

  redirect?: boolean;
}

export default function StarRatingForm({
  initialData,

  redirect = true,
}: StarRatingFormProps) {
  const createStarRating = useCreateHotelStarRating();

  const updateStarRating = useUpdateHotelStarRating();

  return (
    <EntityFormWizard<StarRatingFormSchema, HotelStarRating>
      initialData={initialData}
      redirect={redirect}
      config={starRatingFormConfig}
      createMutation={createStarRating}
      updateMutation={updateStarRating}
    >
      <FormWizardStep index={0}>
        <BasicStep />
      </FormWizardStep>
    </EntityFormWizard>
  );
}
