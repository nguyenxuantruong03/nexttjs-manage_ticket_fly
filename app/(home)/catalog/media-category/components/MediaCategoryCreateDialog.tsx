"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/form/entity-selector";

import {
  MediaCategoryFormSchema,
  schema as MediaCategorySchema,
} from "./form/schema";

import { mediaCategoryDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateMediaCategory } from "@/hooks/catalog/media-category";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { MediaCategory } from "@/types/common/catalog/media-category";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface MediaCategoryCreateDialogProps extends EntityCreateDialogProps<MediaCategory> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function MediaCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: MediaCategoryCreateDialogProps) {
  const createMediaCategory = useCreateMediaCategory();

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<
      MediaCategoryFormSchema,
      Partial<MediaCategory>,
      MediaCategory
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createMediaCategory}
      config={{
        schema: MediaCategorySchema,

        defaultValues: mediaCategoryDefaultValues,

        title: "Create Media Category",

        description: "Create a new media category",

        success: "Media category created",

        submitText: "Create Media Category",

        submittingText: "Creating...",

        getResult: (response): EntityCreateResult<MediaCategory> => ({
          value: response.id,

          label: response.name ?? "Media Category",

          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<MediaCategoryFormSchema>
          name="name"
          label="Media Category Name"
          placeholder="Enter media category name"
        />

        <FormIcon<MediaCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="Enter media category icon"
        />

        <FormInput<MediaCategoryFormSchema>
          name="description"
          label="Description"
          placeholder="Enter media category description"
        />
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<MediaCategoryFormSchema, BookingType>
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

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<MediaCategoryFormSchema> name="active" label="Active" />

        <FormInput<MediaCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
