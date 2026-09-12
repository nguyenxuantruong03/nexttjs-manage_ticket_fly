"use client";

import { FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { StarRatingFormSchema, StarRatingSchema } from "./form/schema";

import { starRatingDefaultValues } from "./form/default-values";

import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

import { useCreateHotelStarRating } from "@/hooks/product-types/hotel/hotel-star-rating";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface StarRatingCreateDialogProps extends EntityCreateDialogProps<HotelStarRating> {}

// ======================================================
// COMPONENT
// ======================================================

export default function StarRatingCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: StarRatingCreateDialogProps) {
  const createStarRating = useCreateHotelStarRating();

  return (
    <EntityCreateFormDialog<
      StarRatingFormSchema,
      Partial<HotelStarRating>,
      HotelStarRating
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createStarRating}
      config={{
        schema: StarRatingSchema,
        defaultValues: starRatingDefaultValues,
        title: "Create Star Rating",
        description: "Create a new star rating",
        success: "Star rating created",
        submitText: "Create Star Rating",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<HotelStarRating> => ({
          value: response.id,
          label: response.name ?? "Star Rating",
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<StarRatingFormSchema>
          name="name"
          label="Name"
          placeholder="Star rating name"
        />

        <FormInput<StarRatingFormSchema>
          name="star"
          label="Star"
          type="number"
          placeholder="1"
        />

        <FormInput<StarRatingFormSchema>
          name="description"
          label="Description"
          placeholder="Description"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
