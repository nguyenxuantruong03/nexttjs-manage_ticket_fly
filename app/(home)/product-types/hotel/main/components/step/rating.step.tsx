// step/rating.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import StarRatingCreateDialog from "../../../star-rating/components/StarRatingCreateDialog";
import { HotelStarRating } from "@/types/product-types/hotel/hotel-detail";

interface RatingStepProps {
  starRatingData: HotelStarRating[];
}

export default function RatingStep({ starRatingData }: RatingStepProps) {
  const starRatingEntityOptions: EntityOption<HotelStarRating>[] =
    starRatingData.map((rating) => ({
      value: rating.id,
      label: rating.name,
      description: rating.description ?? undefined,
      data: rating,
    }));

  return (
    <>
      {/* ======================================================
          STAR RATING
          NOTE: HotelSchema only has `starRatingId` — no `starRating`
          relation field on the form schema, so starRating.name/star/
          description are NOT registered here (per field-groups.ts
          comment).
      ====================================================== */}

      <FormSection
        title="Star Rating"
        description="Hotel classification and rating information"
      >
        <FormEntitySelector<HotelSchemaForm, HotelStarRating>
          name="starRatingId"
          label="Star Rating"
          placeholder="Search rating..."
          searchPlaceholder="Search rating..."
          emptyText="No star rating found"
          createText="Create star rating"
          options={starRatingEntityOptions}
          enableCreate
          renderCreateDialog={(props) => <StarRatingCreateDialog {...props} />}
        />
      </FormSection>
    </>
  );
}
