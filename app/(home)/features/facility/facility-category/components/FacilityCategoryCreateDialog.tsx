"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import {
  FacilityCategoryFormSchema,
  schema as FacilityCategorySchema,
} from "./form/schema";

import { facilityCategoryDefaultValues } from "./form/default-values";

import { useCreateFacilityCategory } from "@/hooks/features/facility-category";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { BookingType } from "@/types/common/commerce/booking-type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface FacilityCategoryCreateDialogProps extends EntityCreateDialogProps<FacilityCategory> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function FacilityCategoryCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: FacilityCategoryCreateDialogProps) {
  const createFacilityCategory = useCreateFacilityCategory();

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<FacilityCategoryFormSchema, FacilityCategory>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFacilityCategory}
      config={{
        schema: FacilityCategorySchema,
        defaultValues: facilityCategoryDefaultValues,
        title: "Create Facility Category",
        description: "Create a new facility category",
        success: "Facility category created",
        submitText: "Create Facility Category",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FacilityCategory> => ({
          value: response.id,
          label: response.name ?? "Facility Category",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<FacilityCategoryFormSchema>
          name="name"
          label="Name"
          placeholder="Accommodation"
        />

        <FormInput<FacilityCategoryFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<FacilityCategoryFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the facility category..."
          />
        </div>
      </div>

      {/* ======================================================
          BOOKING TYPE
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<FacilityCategoryFormSchema, BookingType>
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
        <FormSwitch<FacilityCategoryFormSchema> name="active" label="Active" />

        <FormInput<FacilityCategoryFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
