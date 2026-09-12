// step/medias.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch } from "@/components/form/form-data";

import { MediaCategory } from "@/types/common/catalog/media-category";
import { MediaAsset } from "@/types/common/catalog/media-asset";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";
import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface MediasStepProps {
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
}

export default function MediasStep({
  mediaCategoryData,
  mediaAssetData,
  bookingTypeData,
}: MediasStepProps) {
  const mediaCategoryOptions: EntityOption<MediaCategory>[] =
    mediaCategoryData.map((mediaCategory) => ({
      value: mediaCategory.id,
      label: mediaCategory.name,
      description: mediaCategory.description ?? undefined,
      data: mediaCategory,
    }));

  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssetData.map(
    (mediaAsset) => ({
      value: mediaAsset.id,
      label: mediaAsset.caption ?? "",
      data: mediaAsset,
    }),
  );

  return (
    <FormSection title="Media" description="Rental photos and media gallery">
      <div className="grid gap-6 md:grid-cols-2">
        <FormEntitySelector<CarRentalFormSchema, MediaAsset>
          name="medias.0.mediaId"
          label="Media Asset"
          placeholder="Search media asset..."
          searchPlaceholder="Search media asset..."
          emptyText="No media asset found"
          createText="Create media asset"
          options={mediaAssetOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <MediaAssetCreateDialog
            folder="carRental"
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />

        <FormEntitySelector<CarRentalFormSchema, MediaCategory>
          name="medias.0.categoryId"
          label="Media Category"
          placeholder="Search media category..."
          searchPlaceholder="Search media category..."
          emptyText="No media category found"
          createText="Create media category"
          options={mediaCategoryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <MediaCategoryCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />

        <FormSwitch<CarRentalFormSchema>
          name="medias.0.isPrimary"
          label="Is Primary"
        />

        <FormInput<CarRentalFormSchema>
          name="medias.0.sortOrder"
          label="Sort Order"
          type="number"
        />
      </div>
    </FormSection>
  );
}
