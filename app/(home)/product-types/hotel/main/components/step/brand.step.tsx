"use client";

import FormSection from "@/components/form/FormSection";

import { HotelSchemaForm } from "../form/schema/core/hotel.schema";

import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BrandCreateDialog from "../../../brand/components/BrandCreateDialog";
import { HotelBrand } from "@/types/product-types/hotel/hotel-detail";

interface BrandStepProps {
  brandData: HotelBrand[];
}

export default function BrandStep({ brandData }: BrandStepProps) {
  const brandEntityOptions: EntityOption<HotelBrand>[] = brandData.map(
    (brand) => ({
      value: brand.id,
      label: brand.name,
      description: brand.description ?? undefined,
      data: brand,
    }),
  );

  return (
    <>
      {/* ======================================================
          BRAND
          NOTE: HotelSchema only has `brandId` — no `brand` relation
          field on the form schema, so brand.name/active/description/logo
          are NOT registered here (per field-groups.ts comment).
      ====================================================== */}

      <FormSection
        title="Hotel Brand"
        description="Hotel chain and brand information"
      >
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
      </FormSection>
    </>
  );
}
