// step/rating.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import { HotelSchemaForm } from "../schema/core/hotel.schema";
import { HotelStarRating } from "@/types/bookings/hotel/hotel-detail.type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import StarRatingCreateDialog from "../../../star-rating/components/StarRatingCreateDialog";

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
      ====================================================== */}

      <FormSection
        title="Star Rating"
        description="Hotel classification and rating information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelStarRating>
            name="starRatingId"
            label="Star Rating"
            placeholder="Search rating..."
            searchPlaceholder="Search rating..."
            emptyText="No star rating found"
            createText="Create star rating"
            options={starRatingEntityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <StarRatingCreateDialog {...props} />
            )}
          />

          <FormInput<HotelSchemaForm>
            name="starRating.name"
            label="Rating Name"
            placeholder="Five Star Hotel"
          />

          <FormInput<HotelSchemaForm>
            name="starRating.star"
            label="Stars"
            type="number"
            placeholder="5"
          />

          <FormTextarea<HotelSchemaForm>
            name="starRating.description"
            label="Description"
            placeholder="Rating description"
          />
        </div>
      </FormSection>
    </>
  );
}
