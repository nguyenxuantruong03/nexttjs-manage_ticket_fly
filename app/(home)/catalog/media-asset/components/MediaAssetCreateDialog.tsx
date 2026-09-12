"use client";

import { FormImageUpload, FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import {
  MediaAssetFormSchema,
  schema as MediaAssetSchema,
} from "./form/schema";

import { mediaAssetDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateMediaAsset } from "@/hooks/catalog/media-asset";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { MediaAsset } from "@/types/common/catalog/media-asset";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface MediaAssetCreateDialogProps extends EntityCreateDialogProps<MediaAsset> {
  bookingTypeData: BookingType[];
  folder: string;
}

// ======================================================
// COMPONENT
// ======================================================

export default function MediaAssetCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
  folder,
}: MediaAssetCreateDialogProps) {
  const createMediaAsset = useCreateMediaAsset();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<
      MediaAssetFormSchema,
      Partial<MediaAsset>,
      MediaAsset
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createMediaAsset}
      config={{
        schema: MediaAssetSchema,

        defaultValues: mediaAssetDefaultValues,

        title: "Create Media Asset",

        description: "Create a new media asset",

        success: "Media asset created",

        submitText: "Create Media Asset",

        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<MediaAsset> => ({
          value: response.id,

          label: response.alt || "Media Asset",

          data: response,
        }),
      }}
    >
      {/* ======================================================
          STORAGE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormImageUpload<MediaAssetFormSchema>
          name="path"
          label="Media"
          folder={
            folder
              ? `storage-image/${folder}/originals`
              : "storage-image/media/originals"
          }
          multiple
          maxFiles={20}
        />
      </div>

      {/* ======================================================
          FILE INFO
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="type"
          label="Media Type"
          placeholder="Automatically detected"
          disabled
        />

        <FormInput<MediaAssetFormSchema>
          name="size"
          label="File Size"
          type="number"
          placeholder="Automatically detected"
          disabled
        />

        <FormInput<MediaAssetFormSchema>
          name="width"
          label="Width"
          type="number"
          placeholder="Automatically detected"
          disabled
        />

        <FormInput<MediaAssetFormSchema>
          name="height"
          label="Height"
          type="number"
          placeholder="Automatically detected"
          disabled
        />

        <FormInput<MediaAssetFormSchema>
          name="duration"
          label="Duration"
          type="number"
          placeholder="Automatically detected"
          disabled
        />
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<MediaAssetFormSchema>
          name="alt"
          label="Alt Text"
          placeholder="Describe the media"
        />

        <FormInput<MediaAssetFormSchema>
          name="caption"
          label="Caption"
          placeholder="Enter media caption"
        />
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<MediaAssetFormSchema, BookingType>
          name="bookingTypeIds"
          label="Booking Types"
          placeholder="Search booking types..."
          searchPlaceholder="Search booking types..."
          emptyText="No booking types found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
        />
      </div>
    </EntityCreateFormDialog>
  );
}
