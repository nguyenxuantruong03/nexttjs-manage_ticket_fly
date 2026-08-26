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

import { BathroomTypeFormSchema, BathroomTypeSchema } from "./form/schema";

import { bathroomTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateHotelBathroomType } from "@/hooks/product-types/hotel/hotel-bathroom-type";
import { BathroomType } from "@/types/product-types/hotel/room/room.types";

// ======================================================
// PROPS
// ======================================================

interface BathroomTypeCreateDialogProps extends EntityCreateDialogProps<BathroomType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BathroomTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BathroomTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createBathroomType = useCreateHotelBathroomType();

  const { form } = useAppForm<BathroomTypeFormSchema>({
    schema: BathroomTypeSchema,
    defaultValues: bathroomTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...bathroomTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: BathroomTypeFormSchema) => {
    submit({
      mutation: createBathroomType.mutateAsync(values),

      success: "Bathroom Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<BathroomType> = {
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
      title="Create Bathroom Type"
      description="Create a new bathroom type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createBathroomType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<BathroomTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Bathroom type name"
            />

            <FormInput<BathroomTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<BathroomTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<BathroomTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<BathroomTypeFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createBathroomType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createBathroomType.isPending}>
              {createBathroomType.isPending
                ? "Creating..."
                : "Create Bathroom Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
