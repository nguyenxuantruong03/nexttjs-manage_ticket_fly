"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  DiningServiceTypeFormSchema,
  DiningServiceTypeSchema,
} from "./form/schema";

import { diningServiceTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { DiningServiceType } from "@/types/bookings/hotel/service/dinner-option.type";
import { useCreateHotelDiningServiceType } from "@/hooks/hotel/hotel-dining-service-type";

// ======================================================
// PROPS
// ======================================================

interface DiningServiceTypeCreateDialogProps extends EntityCreateDialogProps<DiningServiceType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function DiningServiceTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: DiningServiceTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createDiningServiceType = useCreateHotelDiningServiceType();

  const { form } = useAppForm<DiningServiceTypeFormSchema>({
    schema: DiningServiceTypeSchema,
    defaultValues: diningServiceTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...diningServiceTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: DiningServiceTypeFormSchema) => {
    submit({
      mutation: createDiningServiceType.mutateAsync(values),

      success: "Dining Service Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<DiningServiceType> = {
          value: response.id,
          label: response.name,
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
      title="Create Dining Service Type"
      description="Create a new dining service type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createDiningServiceType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<DiningServiceTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Dining service type name"
            />

            <FormInput<DiningServiceTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<DiningServiceTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<DiningServiceTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<DiningServiceTypeFormSchema>
              name="active"
              label="Active"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createDiningServiceType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createDiningServiceType.isPending}>
              {createDiningServiceType.isPending
                ? "Creating..."
                : "Create Dining Service Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
