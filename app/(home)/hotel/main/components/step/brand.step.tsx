"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import {
  HotelBrand,
  HotelStarRating,
} from "@/types/bookings/hotel/hotel-detail.type";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BrandCreateDialog from "../../../brand/components/BrandCreateDialog";
import StarRatingCreateDialog from "../../../star-rating/components/StarRatingCreateDialog";

interface BrandStepProps {
  brandData: HotelBrand[];
  starRatingData: HotelStarRating[];
}

export default function BrandStep({ brandData, starRatingData }: BrandStepProps) {
  const brandEntityOptions: EntityOption<HotelBrand>[] = brandData.map(
    (brand) => ({
      value: brand.id,
      label: brand.name,
      description: brand.description ?? undefined,
      data: brand,
    }),
  );

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
          BRAND
      ====================================================== */}

      <FormSection
        title="Hotel Brand"
        description="Hotel chain and brand information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, HotelBrand>
            name="brandId"
            label="Brand"
            placeholder="Search brand..."
            searchPlaceholder="Search brand..."
            emptyText="No brand found"
            createText="Create brand"
            options={brandEntityOptions}
            enableCreate
            renderCreateDialog={(props) => <BrandCreateDialog {...props} />}
          />

          <FormInput<HotelSchemaForm>
            name="brand.name"
            label="Brand Name"
            placeholder="Brand name"
          />
          <FormSwitch<HotelSchemaForm> name="brand.active" label="Active" />
          <FormTextarea<HotelSchemaForm>
            name="brand.description"
            label="Description"
            placeholder="Brand description"
          />

          <FormInput<HotelSchemaForm>
            name="brand.logo"
            label="Logo URL"
            placeholder="https://..."
          />
        </div>
      </FormSection>

      {/* ======================================================
          STAR RATING
      ====================================================== */}

      <FormSection title="Star Rating" description="Hotel classification">
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
