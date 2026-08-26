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
  BookingItemTypeFormSchema,
  schema as BookingItemTypeSchema,
} from "./form/schema";

import { bookingItemTypeDefaultValues } from "./form/default-values";

import { useCreateBookingItemType } from "@/hooks/commerce/booking-item-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";
import { BookingItemType } from "@/types/common/commerce/booking-item-type.type";

// ======================================================
// PROPS
// ======================================================

interface BookingItemTypeCreateDialogProps extends EntityCreateDialogProps<BookingItemType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function BookingItemTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: BookingItemTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();
  const createBookingItemType = useCreateBookingItemType();

  const { form } = useAppForm<BookingItemTypeFormSchema>({
    schema: BookingItemTypeSchema,
    defaultValues: bookingItemTypeDefaultValues,
  });

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...bookingItemTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: BookingItemTypeFormSchema) => {
    submit({
      mutation: createBookingItemType.mutateAsync(values),

      success: "Booking item type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<BookingItemType> = {
          value: response.id,
          label: response.name ?? "Booking Item Type",
          data: response,
        };

        onCreated(result);

        form.reset();
        onOpenChange(false);
      },
    });
  };

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] =
    bookingTypeData?.map((type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    })) ?? [];

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Booking Item Type"
      description="Create a new booking item type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createBookingItemType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Basic</h3>

              <p className="text-sm text-muted-foreground">
                Basic booking item type information
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<BookingItemTypeFormSchema>
                name="name"
                label="Name"
                placeholder="Hotel, Room, Vehicle..."
              />

              <FormInput<BookingItemTypeFormSchema>
                name="icon"
                label="Icon"
                placeholder="hotel"
              />

              <div className="md:col-span-2">
                <FormTextarea<BookingItemTypeFormSchema>
                  name="description"
                  label="Description"
                  placeholder="Describe the booking item type..."
                />
              </div>
            </div>
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Booking Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the booking type for this item type
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormEntitySelector<BookingItemTypeFormSchema, BookingType>
                name="bookingTypeId"
                label="Booking Type"
                placeholder="Search booking type..."
                searchPlaceholder="Search booking type..."
                emptyText="No booking type found"
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
              CONFIGURATION
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Configuration</h3>

              <p className="text-sm text-muted-foreground">
                Configure the display order and status
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<BookingItemTypeFormSchema>
                name="sortOrder"
                label="Sort Order"
                type="number"
                placeholder="0"
              />

              <FormSwitch<BookingItemTypeFormSchema>
                name="active"
                label="Active"
              />
            </div>
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createBookingItemType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createBookingItemType.isPending}>
              {createBookingItemType.isPending
                ? "Creating..."
                : "Create Booking Item Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
