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

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  FacilityCategoryFormSchema,
  schema as FacilityCategorySchema,
} from "./form/schema";

import { facilityCategoryDefaultValues } from "./form/default-values";

import { useCreateFacilityCategory } from "@/hooks/features/facility-category";

import { FacilityCategory } from "@/types/common/features/facility/facility-category";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import { BookingType } from "@/types/common/commerce/booking-type";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFacilityCategory = useCreateFacilityCategory();

  const { form } = useAppForm<FacilityCategoryFormSchema>({
    schema: FacilityCategorySchema,
    defaultValues: facilityCategoryDefaultValues,
  });

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...facilityCategoryDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: FacilityCategoryFormSchema) => {
    submit({
      mutation: createFacilityCategory.mutateAsync(values),

      success: "Facility category created",

      onSuccess: (response) => {
        const result: EntityCreateResult<FacilityCategory> = {
          value: response.id,
          label: response.name ?? "Facility Category",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Facility Category"
      description="Create a new facility category"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFacilityCategory.isPending}
      >
        <div className="space-y-6">
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

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Booking Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the booking type for this extra fee type
              </p>
            </div>

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
                renderCreateDialog={(props) => (
                  <BookingTypeCreateDialog {...props} />
                )}
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FacilityCategoryFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<FacilityCategoryFormSchema>
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
              disabled={createFacilityCategory.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFacilityCategory.isPending}>
              {createFacilityCategory.isPending
                ? "Creating..."
                : "Create Facility Category"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
