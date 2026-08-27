"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

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
  ExtraFeeTypeFormSchema,
  schema as ExtraFeeTypeSchema,
} from "./form/schema";

import { extraFeeTypeDefaultValues } from "./form/default-values";

import { useCreateExtraFeeType } from "@/hooks/commerce/extra-fee-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "../../../booking-type/components/BookingTypeCreateDialog";

import { ExtraFeeType } from "@/types/common/commerce/extra-fee-type.type";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

// ======================================================
// PROPS
// ======================================================

interface ExtraFeeTypeCreateDialogProps extends EntityCreateDialogProps<ExtraFeeType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraFeeTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: ExtraFeeTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createExtraFeeType = useCreateExtraFeeType();

  const { form } = useAppForm<ExtraFeeTypeFormSchema>({
    schema: ExtraFeeTypeSchema,
    defaultValues: extraFeeTypeDefaultValues,
  });

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

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...extraFeeTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: ExtraFeeTypeFormSchema) => {
    submit({
      mutation: createExtraFeeType.mutateAsync(values),

      success: "Extra fee type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<ExtraFeeType> = {
          value: response.id,
          label: response.name ?? "Extra Fee Type",
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
      title="Create Extra Fee Type"
      description="Create a new extra fee type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createExtraFeeType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Basic</h3>

              <p className="text-sm text-muted-foreground">
                Basic extra fee type information
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormInput<ExtraFeeTypeFormSchema>
                name="name"
                label="Name"
                placeholder="Enter extra fee type name"
              />

              <FormInput<ExtraFeeTypeFormSchema>
                name="icon"
                label="Icon"
                placeholder="Enter extra fee type icon"
              />

              <div className="md:col-span-2">
                <FormTextarea<ExtraFeeTypeFormSchema>
                  name="description"
                  label="Description"
                  placeholder="Describe the extra fee type..."
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
                Select the booking type for this extra fee type
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormEntityMultiSelector<ExtraFeeTypeFormSchema, BookingType>
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

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Status</h3>

              <p className="text-sm text-muted-foreground">
                Extra fee type configuration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormSwitch<ExtraFeeTypeFormSchema>
                name="active"
                label="Active"
              />

              <FormInput<ExtraFeeTypeFormSchema>
                name="sortOrder"
                label="Sort Order"
                type="number"
                placeholder="0"
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
              disabled={createExtraFeeType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createExtraFeeType.isPending}>
              {createExtraFeeType.isPending
                ? "Creating..."
                : "Create Extra Fee Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
