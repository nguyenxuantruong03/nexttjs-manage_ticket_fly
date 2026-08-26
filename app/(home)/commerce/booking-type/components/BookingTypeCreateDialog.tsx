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
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  BookingTypeFormSchema,
  schema as BookingTypeSchema,
} from "./form/schema";

import { bookingTypeDefaultValues } from "./form/default-values";
import { useCreateBookingType } from "@/hooks/commerce/booking-type";
import { BookingType } from "@/types/common/commerce/booking-type";

// ======================================================
// PROPS
// ======================================================

interface BookingTypeCreateDialogProps extends EntityCreateDialogProps<BookingType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BookingTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BookingTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createBookingType = useCreateBookingType();

  const { form } = useAppForm<BookingTypeFormSchema>({
    schema: BookingTypeSchema,
    defaultValues: bookingTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...bookingTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: BookingTypeFormSchema) => {
    submit({
      mutation: createBookingType.mutateAsync(values),

      success: "Booking type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<BookingType> = {
          value: response.id,
          label: response.name ?? "Booking Type",
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Booking Type"
      description="Create a new booking type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createBookingType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<BookingTypeFormSchema>
              name="code"
              label="Code"
              placeholder="Enter booking type code"
            />

            <FormInput<BookingTypeFormSchema>
              name="name"
              label="Booking Type Name"
              placeholder="Enter booking type name"
            />

            <div className="md:col-span-2">
              <FormTextarea<BookingTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the booking type..."
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<BookingTypeFormSchema> name="active" label="Active" />

            <FormInput<BookingTypeFormSchema>
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
              disabled={createBookingType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createBookingType.isPending}>
              {createBookingType.isPending
                ? "Creating..."
                : "Create Booking Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
