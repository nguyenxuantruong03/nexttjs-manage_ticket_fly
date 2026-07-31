"use client";

import * as React from "react";

import { AppForm, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { TypeFormSchema, TypeSchema } from "./form/schema";
import { typeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { HotelType } from "@/types/bookings/hotel/core/hotel-information.types";
import { useCreateHotelType } from "@/hooks/hotel/hotel-type";

// ======================================================
// PROPS
// ======================================================

interface TypeCreateDialogProps extends EntityCreateDialogProps<HotelType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function TypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: TypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createType = useCreateHotelType();

  const { form } = useAppForm<TypeFormSchema>({
    schema: TypeSchema,
    defaultValues: typeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...typeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: TypeFormSchema) => {
    submit({
      mutation: createType.mutateAsync(values),

      success: "Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelType> = {
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
      title="Create Type"
      description="Create a new type"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createType.isPending}>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<TypeFormSchema>
              name="name"
              label="Name"
              placeholder="Type name"
            />

            <FormInput<TypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <FormInput<TypeFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />

            <FormInput<TypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              placeholder="0"
              type="number"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createType.isPending}>
              {createType.isPending ? "Creating..." : "Create Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
