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

import { ExtraTypeFormSchema, schema as ExtraTypeSchema } from "./form/schema";

import { extraTypeDefaultValues } from "./form/default-values";
import { useCreateExtraType } from "@/hooks/commerce/extra-type";
import { ExtraType } from "@/types/common/commerce/extra/extra-type.type";
import BookingTypeCreateDialog from "../../booking-type/components/BookingTypeCreateDialog";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import { BookingType } from "@/types/common/commerce/booking-type";

// ======================================================
// PROPS
// ======================================================

interface ExtraTypeCreateDialogProps extends EntityCreateDialogProps<ExtraType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: ExtraTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createExtraType = useCreateExtraType();

  const { form } = useAppForm<ExtraTypeFormSchema>({
    schema: ExtraTypeSchema,
    defaultValues: extraTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...extraTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: ExtraTypeFormSchema) => {
    submit({
      mutation: createExtraType.mutateAsync(values),

      success: "Extra type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<ExtraType> = {
          value: response.id,
          label: response.name ?? "Extra Type",
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

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Extra Type"
      description="Create a new extra type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createExtraType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ExtraTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Enter extra type name"
            />

            <FormInput<ExtraTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormTextarea<ExtraTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the extra type..."
              />
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
              <FormEntitySelector<ExtraTypeFormSchema, BookingType>
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
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<ExtraTypeFormSchema> name="active" label="Active" />

            <FormInput<ExtraTypeFormSchema>
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
              disabled={createExtraType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createExtraType.isPending}>
              {createExtraType.isPending ? "Creating..." : "Create Extra Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
