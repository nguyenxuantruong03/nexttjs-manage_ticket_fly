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

import { ExtraTypeFormSchema, ExtraTypeSchema } from "./form/schema";

import { extraTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { ExtraType } from "@/types/bookings/hotel/service/extra.type";
import { useCreateHotelExtraType } from "@/hooks/hotel/hotel-extra-type";

// ======================================================
// PROPS
// ======================================================

interface ExtraTypeCreateDialogProps extends EntityCreateDialogProps<ExtraType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function ExtraTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: ExtraTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createExtraType = useCreateHotelExtraType();

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

      success: "Extra Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<ExtraType> = {
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
      title="Create Extra Type"
      description="Create a new extra type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createExtraType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ExtraTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Extra type name"
            />

            <FormInput<ExtraTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<ExtraTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<ExtraTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<ExtraTypeFormSchema> name="active" label="Active" />
          </div>

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
