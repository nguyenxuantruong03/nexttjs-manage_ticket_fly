"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";

import { FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { FlyAircraftFormSchema } from "../schema/aircraft.schema";

import { EntityOption } from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { MediaCategory } from "@/types/common/catalog/media-category";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { BookingType } from "@/types/common/commerce/booking-type";

import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";

import MediaCategoryCreateDialog from "@/app/(home)/catalog/media-category/components/MediaCategoryCreateDialog";

interface ImagesStepProps {
  mediaCategoryData: MediaCategory[];
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
}

export default function ImagesStep({
  mediaCategoryData,
  mediaAssetData,
  bookingTypeData,
}: ImagesStepProps) {
  const { control } = useFormContext<FlyAircraftFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

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
    <FormSection title="Images" description="Aircraft images and gallery">
      <div className="space-y-4">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid items-end gap-4 rounded-lg border p-4 md:grid-cols-[1fr_1fr_auto_auto_auto]"
          >
            <FormEntitySelector<FlyAircraftFormSchema, MediaAsset>
              name={`images.${index}.mediaId`}
              label="Media"
              placeholder="Search media asset..."
              searchPlaceholder="Search media asset..."
              emptyText="No media asset found"
              createText="Create media asset"
              options={mediaAssetOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <MediaAssetCreateDialog
                  folder="aircraft"
                  bookingTypeData={bookingTypeData}
                  {...props}
                />
              )}
            />

            <FormEntitySelector<FlyAircraftFormSchema, MediaCategory>
              name={`images.${index}.categoryId`}
              label="Category"
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

            <FormSwitch<FlyAircraftFormSchema>
              name={`images.${index}.isPrimary`}
              label="Primary"
            />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() =>
            append({
              mediaId: "",
              categoryId: "",
              isPrimary: false,
              sortOrder: fields.length,
            })
          }
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Image
        </Button>
      </div>
    </FormSection>
  );
}
