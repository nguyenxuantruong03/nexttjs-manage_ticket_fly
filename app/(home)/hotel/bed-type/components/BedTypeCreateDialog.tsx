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

import { BedTypeFormSchema, BedTypeSchema } from "./form/schema";

import { bedTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateHotelBedType } from "@/hooks/hotel/hotel-bed-type";
import { BedType } from "@/types/bookings/hotel/room/room.types";

// ======================================================
// PROPS
// ======================================================

interface BedTypeCreateDialogProps extends EntityCreateDialogProps<BedType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BedTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BedTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createBedType = useCreateHotelBedType();

  const { form } = useAppForm<BedTypeFormSchema>({
    schema: BedTypeSchema,
    defaultValues: bedTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...bedTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: BedTypeFormSchema) => {
    submit({
      mutation: createBedType.mutateAsync(values),

      success: "Bed Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<BedType> = {
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
      title="Create Bed Type"
      description="Create a new bed type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createBedType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<BedTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Bed type name"
            />

            <FormInput<BedTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<BedTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<BedTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<BedTypeFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createBedType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createBedType.isPending}>
              {createBedType.isPending ? "Creating..." : "Create Bed Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
