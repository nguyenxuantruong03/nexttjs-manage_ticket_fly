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
} from "@/components/form/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { FacilityFormSchema, schema as FacilitySchema } from "./form/schema";

import { facilityDefaultValues } from "./form/default-values";

import { useCreateFacility } from "@/hooks/features/facility";

import { Facility } from "@/types/common/features/facility/facility";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import FacilityCategoryCreateDialog from "../../facility-category/components/FacilityCategoryCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface FacilityCreateDialogProps extends EntityCreateDialogProps<Facility> {
  facilityCategoryData: FacilityCategory[];
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function FacilityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  facilityCategoryData,
  bookingTypeData,
}: FacilityCreateDialogProps) {
  const createFacility = useCreateFacility();

  // ======================================================
  // OPTIONS
  // ======================================================

  const categoryOptions: EntityOption<FacilityCategory>[] =
    facilityCategoryData?.map((category) => ({
      value: category.id,
      label: category.name,
      description: category.description ?? undefined,
      data: category,
    })) ?? [];

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<FacilityFormSchema, Partial<Facility>, Facility>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFacility}
      config={{
        schema: FacilitySchema,
        defaultValues: facilityDefaultValues,
        title: "Create Facility",
        description: "Create a new facility",
        success: "Facility created",
        submitText: "Create Facility",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Facility> => ({
          value: response.id,
          label: response.name ?? "Facility",
          data: response,
        }),
      }}
    >
      {/* ======================================================
          BASIC
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<FacilityFormSchema>
          name="name"
          label="Name"
          placeholder="Swimming Pool"
        />

        <FormIcon<FacilityFormSchema>
          name="icon"
          label="Icon"
          placeholder="https://..."
        />

        <div className="md:col-span-2">
          <FormTextarea<FacilityFormSchema>
            name="description"
            label="Description"
            placeholder="Describe the facility..."
          />
        </div>
      </div>

      {/* ======================================================
          CATEGORY
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntitySelector<FacilityFormSchema, FacilityCategory>
          name="categoryId"
          label="Facility Category"
          placeholder="Search facility category..."
          searchPlaceholder="Search facility category..."
          emptyText="No facility category found"
          createText="Create facility category"
          options={categoryOptions}
          enableCreate
          renderCreateDialog={(props) => (
            <FacilityCategoryCreateDialog
              bookingTypeData={bookingTypeData}
              {...props}
            />
          )}
        />

        <FormEntityMultiSelector<FacilityFormSchema, BookingType>
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
        <FormSwitch<FacilityFormSchema> name="active" label="Active" />

        <FormInput<FacilityFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
