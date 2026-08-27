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
  ServiceTypeFormSchema,
  schema as ServiceTypeSchema,
} from "./form/schema";

import { serviceTypeDefaultValues } from "./form/default-values";

import { BookingType } from "@/types/common/commerce/booking-type";

import { useCreateServiceType } from "@/hooks/catalog/service-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";
import { ServiceType } from "@/types/common/catalog/service-type.type";
import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

// ======================================================
// PROPS
// ======================================================

interface ServiceTypeCreateDialogProps extends EntityCreateDialogProps<ServiceType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function ServiceTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: ServiceTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createServiceType = useCreateServiceType();

  const { form } = useAppForm<ServiceTypeFormSchema>({
    schema: ServiceTypeSchema,
    defaultValues: serviceTypeDefaultValues,
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
      ...serviceTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: ServiceTypeFormSchema) => {
    submit({
      mutation: createServiceType.mutateAsync(values),

      success: "Service type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<ServiceType> = {
          value: response.id,
          label: response.name ?? "Service Type",
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
      title="Create Service Type"
      description="Create a new service type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createServiceType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ServiceTypeFormSchema>
              name="name"
              label="Service Type Name"
              placeholder="Enter service type name"
            />

            <FormInput<ServiceTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Enter service type icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<ServiceTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the service type..."
              />
            </div>
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntityMultiSelector<ServiceTypeFormSchema, BookingType>
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
            <FormSwitch<ServiceTypeFormSchema> name="active" label="Active" />

            <FormInput<ServiceTypeFormSchema>
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
              disabled={createServiceType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createServiceType.isPending}>
              {createServiceType.isPending
                ? "Creating..."
                : "Create Service Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
