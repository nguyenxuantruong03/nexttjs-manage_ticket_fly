// step/media.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { HotelSchemaForm } from "../form/schema/core/hotel.schema";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { MediaAsset } from "@/types/common/catalog/media-asset";
import { MediaCategory } from "@/types/common/catalog/media-category";
import { EntityOption } from "@/components/form/entity-selector";
import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";
import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";

interface MediaStepProps {
  mediaAssetData: MediaAsset[];
  mediaCategoryData: MediaCategory[];
  bookingTypeData: BookingType[];
}

export default function MediaStep({
  mediaAssetData,
  mediaCategoryData,
  bookingTypeData,
}: MediaStepProps) {
  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssetData.map(
    (mediaAsset) => ({
      value: mediaAsset.id,
      label: mediaAsset.caption ?? "",
      data: mediaAsset,
    }),
  );

  const mediaCategoryOptions: EntityOption<MediaCategory>[] =
    mediaCategoryData.map((mediaCategory) => ({
      value: mediaCategory.id,
      label: mediaCategory.name,
      data: mediaCategory,
    }));
  return (
    <>
      {/* ======================================================
          HOTEL MEDIA
      ====================================================== */}

      <FormSection title="Gallery" description="Hotel photos & media">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, MediaAsset>
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
                folder="hotel"
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, MediaCategory>
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

          <FormInput<HotelSchemaForm>
            name="medias.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<HotelSchemaForm>
            name="medias.0.isPrimary"
            label="Primary"
            description="Use as the main hotel image"
          />
        </div>
      </FormSection>
    </>
  );
}
