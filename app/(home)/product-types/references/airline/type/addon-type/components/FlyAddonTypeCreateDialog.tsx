"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { useCreateFlyAddonType } from "@/hooks/product-types/references/airline/addon-type";

import { FlyAddonTypeFormSchema, FlyAddonTypeSchema } from "./form/schema";

import { flyAddonTypeDefaultValues } from "./form/default-values";
import { FlyAddonType } from "@/types/product-types/references/airline/fly-addon-type";

// ======================================================
// PROPS
// ======================================================

interface FlyAddonTypeCreateDialogProps extends EntityCreateDialogProps<FlyAddonType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAddonTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAddonTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyAddonType = useCreateFlyAddonType();

  const { form } = useAppForm<FlyAddonTypeFormSchema>({
    schema: FlyAddonTypeSchema,
    defaultValues: flyAddonTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyAddonTypeDefaultValues,

      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyAddonTypeFormSchema) => {
    submit({
      mutation: createFlyAddonType.mutateAsync(values),

      success: "Fly addon type created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyAddonType> = {
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
      title="Create Fly Addon Type"
      description="Create a new fly addon type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyAddonType.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyAddonTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Extra Baggage"
            />

            <FormInput<FlyAddonTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlyAddonTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe addon type"
              />
            </div>
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyAddonTypeFormSchema> name="active" label="Active" />

            <FormInput<FlyAddonTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ACTION */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFlyAddonType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyAddonType.isPending}>
              {createFlyAddonType.isPending
                ? "Creating..."
                : "Create Addon Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
