"use client";

import { useFieldArray, useFormContext } from "react-hook-form";

import { Plus, Trash2 } from "lucide-react";

import FormSection from "@/components/form/FormSection";

import { Button } from "@/components/ui/button";

import { PackageFormSchema } from "../form/schema";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import { BookingType } from "@/types/common/commerce/booking-type";

import MediaAssetCreateDialog from "@/app/(home)/catalog/media-asset/components/MediaAssetCreateDialog";
import { EntityOption } from "@/components/form/entity-selector";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

interface MediaStepProps {
  mediaAssetData: MediaAsset[];
  bookingTypeData: BookingType[];
}

export default function MediaStep({
  mediaAssetData,
  bookingTypeData,
}: MediaStepProps) {
  const { control } = useFormContext<PackageFormSchema>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const mediaAssetOptions: EntityOption<MediaAsset>[] = mediaAssetData.map(
    (mediaAsset) => ({
      value: mediaAsset.id,
      label: mediaAsset.caption ?? "",
      data: mediaAsset,
    }),
  );

  const handleAddImage = () => {
    append({
      mediaId: "",
      sortOrder: fields.length,
    });
  };

  return (
    <FormSection title="Media" description="Manage package images">
      <div className="space-y-6">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-end gap-3">
            <div className="flex-1">
              <FormEntitySelector<PackageFormSchema, MediaAsset>
                name={`images.${index}.mediaId`}
                label={`Image ${index + 1}`}
                placeholder="Search media asset..."
                searchPlaceholder="Search media asset..."
                emptyText="No media asset found"
                createText="Create media asset"
                options={mediaAssetOptions}
                enableCreate
                renderCreateDialog={(props) => (
                  <MediaAssetCreateDialog
                    folder="package"
                    bookingTypeData={bookingTypeData}
                    {...props}
                  />
                )}
              />
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}

        <Button type="button" variant="outline" onClick={handleAddImage}>
          <Plus className="mr-2 h-4 w-4" />
          Add Image
        </Button>
      </div>
    </FormSection>
  );
}
