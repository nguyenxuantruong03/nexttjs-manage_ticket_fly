// step/medias.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormCombobox,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";
import { HotelSchemaForm } from "../schema/core/hotel.schema";
import {
  HotelMedia,
  HotelMediaCategory,
} from "@/types/bookings/hotel/core/hotel-media.types";
import { EntityOption } from "@/components/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import MediaCategoryCreateDialog from "../../../media-category/components/MediaCategoryCreateDialog";
import { MediaAsset } from "@/types/bookings/hotel/media.type";
import MediaAssetCreateDialog from "../../../media-asset/components/MediaAssetCreateDialog";

interface MediasStepProps {
  mediaAssestData: MediaAsset[];
  mediaCategoryData: HotelMediaCategory[];
}

export default function MediasStep({
  mediaAssestData,
  mediaCategoryData,
}: MediasStepProps) {
  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssestData.map(
    (media) => ({
      value: media.id,
      label: media.alt ?? "",
      description: media.url ?? undefined,
      data: media,
    }),
  );

  const mediaCategoryEntityOptions: EntityOption<HotelMediaCategory>[] =
    mediaCategoryData.map((category) => ({
      value: category.id,
      label: category.name,
      description: category.description ?? undefined,
      data: category,
    }));
  return (
    <>
      {/* ======================================================
          HOTEL MEDIA
      ====================================================== */}

      <FormSection
        title="Hotel Images"
        description="Upload and manage hotel gallery"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormEntitySelector<HotelSchemaForm, MediaAsset>
            name="medias.0.mediaAssetId"
            label="Media"
            placeholder="Search media..."
            searchPlaceholder="Search media..."
            emptyText="No media found"
            createText="Create media"
            options={mediaAssetOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaAssetCreateDialog {...props} />
            )}
          />

          <FormEntitySelector<HotelSchemaForm, HotelMediaCategory>
            name="medias.0.categoryId"
            label="Media Category"
            placeholder="Search category..."
            searchPlaceholder="Search category..."
            emptyText="No media category found"
            createText="Create media category"
            options={mediaCategoryEntityOptions}
            enableCreate
            renderCreateDialog={(props) => (
              <MediaCategoryCreateDialog {...props} />
            )}
          />
        </div>
      </FormSection>

      {/* ======================================================
          SETTINGS
      ====================================================== */}

      <FormSection title="Media Settings" description="Display configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelSchemaForm>
            name="medias.0.isPrimary"
            label="Primary Image"
            description="Use as main hotel image"
          />

          <FormInput<HotelSchemaForm>
            name="medias.0.sortOrder"
            label="Sort Order"
            type="number"
            placeholder="0"
          />
        </div>
      </FormSection>
    </>
  );
}
