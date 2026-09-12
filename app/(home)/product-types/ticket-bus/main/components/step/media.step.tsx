"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { BusFormSchema } from "../form/schema/core/bus.schema";

import { EntityOption } from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { MediaCategory } from "@/types/common/catalog/media-category";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { BookingType } from "@/types/common/commerce/booking-type";

import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";

import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";

interface MediaStepProps {
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
}

export default function MediaStep({
  mediaCategoryData,
  mediaAssetData,
  bookingTypeData,
}: MediaStepProps) {
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
    <>
      <FormSection title="Bus Gallery" description="Bus-level images">
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<BusFormSchema, MediaAsset>
            name="images.0.mediaId"
            label="Media Asset"
            placeholder="Search media asset..."
            searchPlaceholder="Search media asset..."
            emptyText="No media asset found"
            createText="Create media asset"
            options={mediaAssetOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaAssetCreateDialog
                folder="bus"
                bookingTypeData={bookingTypeData}
                {...props}
              />
            )}
          />

          <FormEntitySelector<BusFormSchema, MediaCategory>
            name="images.0.categoryId"
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

          <FormInput<BusFormSchema> name="images.0.alt" label="Alt Text" />

          <FormInput<BusFormSchema>
            name="images.0.sortOrder"
            label="Sort Order"
            type="number"
          />

          <FormSwitch<BusFormSchema>
            name="images.0.isPrimary"
            label="Primary Image"
          />
        </div>
      </FormSection>
    </>
  );
}
