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

import { RouteTypeFormSchema, schema as RouteTypeSchema } from "./form/schema";

import { routeTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateRouteType } from "@/hooks/catalog/route-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import { RouteType } from "@/types/common/catalog/route-type.type";

// ======================================================
// PROPS
// ======================================================

interface RouteTypeCreateDialogProps extends EntityCreateDialogProps<RouteType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function RouteTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: RouteTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createRouteType = useCreateRouteType();

  const { form } = useAppForm<RouteTypeFormSchema>({
    schema: RouteTypeSchema,
    defaultValues: routeTypeDefaultValues,
  });

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeEntityOptions: EntityOption<BookingType>[] =
    bookingTypeData.map((bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      description: bookingType.description ?? undefined,
      data: bookingType,
    }));

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...routeTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: RouteTypeFormSchema) => {
    submit({
      mutation: createRouteType.mutateAsync(values),

      success: "Route type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<RouteType> = {
          value: response.id,
          label: response.name ?? "Route Type",
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
      title="Create Route Type"
      description="Create a new route type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createRouteType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<RouteTypeFormSchema>
              name="name"
              label="Route Type Name"
              placeholder="Enter route type name"
            />

            <FormTextarea<RouteTypeFormSchema>
              name="description"
              label="Description"
              placeholder="Enter route type description"
            />

            <FormInput<RouteTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Enter route type icon"
            />
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntitySelector<RouteTypeFormSchema, BookingType>
              name="bookingTypeId"
              label="Booking Type"
              placeholder="Search booking type..."
              searchPlaceholder="Search booking type..."
              emptyText="No booking type found"
              createText="Create booking type"
              options={bookingTypeEntityOptions}
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
            <FormSwitch<RouteTypeFormSchema> name="active" label="Active" />

            <FormInput<RouteTypeFormSchema>
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
              disabled={createRouteType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createRouteType.isPending}>
              {createRouteType.isPending ? "Creating..." : "Create Route Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
