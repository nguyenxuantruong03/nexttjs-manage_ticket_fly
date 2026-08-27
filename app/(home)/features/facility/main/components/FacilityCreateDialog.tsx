"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { FacilityFormSchema, schema as FacilitySchema } from "./form/schema";

import { facilityDefaultValues } from "./form/default-values";

import { useCreateFacility } from "@/hooks/features/facility";

import { Facility } from "@/types/common/features/facility/facility";
import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import FacilityCategoryCreateDialog from "../../facility-category/components/FacilityCategoryCreateDialog";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFacility = useCreateFacility();

  const { form } = useAppForm<FacilityFormSchema>({
    schema: FacilitySchema,
    defaultValues: facilityDefaultValues,
  });

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

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...facilityDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: FacilityFormSchema) => {
    submit({
      mutation: createFacility.mutateAsync(values),

      success: "Facility created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Facility> = {
          value: response.id,
          label: response.name ?? "Facility",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Facility"
      description="Create a new facility"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFacility.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FacilityFormSchema>
              name="name"
              label="Name"
              placeholder="Swimming Pool"
            />

            <FormInput<FacilityFormSchema>
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
              renderCreateDialog={(props) => (
                <BookingTypeCreateDialog {...props} />
              )}
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

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFacility.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFacility.isPending}>
              {createFacility.isPending ? "Creating..." : "Create Facility"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
