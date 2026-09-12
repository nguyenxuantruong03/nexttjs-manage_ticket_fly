"use client";

import FormSection from "@/components/form/FormSection";

import { ExtraFormSchema } from "../form/schema";

import { EntityOption } from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { BookingType } from "@/types/common/commerce/booking-type";

import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";

interface MediaStepProps {
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
}

export default function MediaStep({
  mediaAssetData = [],
  bookingTypeData,
}: MediaStepProps) {
  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssetData.map(
    (mediaAsset) => ({
      value: mediaAsset.id,
      label: mediaAsset.caption ?? "",
      data: mediaAsset,
    }),
  );

  return (
    <FormSection title="Media" description="Manage images for this extra">
      <div className="space-y-6">
        <FormEntitySelector<ExtraFormSchema, MediaAsset>
          name="images.0.mediaId"
          label="Image"
          placeholder="Search media asset..."
          searchPlaceholder="Search media asset..."
          emptyText="No media asset found"
          createText="Create media asset"
          options={mediaAssetOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <MediaAssetCreateDialog
              bookingTypeData={bookingTypeData}
              folder="extra"
              {...props}
            />
          )}
        />
      </div>
    </FormSection>
  );
}
