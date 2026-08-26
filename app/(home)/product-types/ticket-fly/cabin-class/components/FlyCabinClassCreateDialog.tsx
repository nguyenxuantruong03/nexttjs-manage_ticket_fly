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

import { useCreateFlyCabinClass } from "@/hooks/product-types/ticket-fly/cabin-class";

import { FlyCabinClassFormSchema, FlyCabinClassSchema } from "./form/schema";

import { flyCabinClassDefaultValues } from "./form/default-values";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

// ======================================================
// PROPS
// ======================================================

interface FlyCabinClassCreateDialogProps extends EntityCreateDialogProps<FlyCabinClass> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCabinClassCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyCabinClassCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyCabinClass = useCreateFlyCabinClass();

  const { form } = useAppForm<FlyCabinClassFormSchema>({
    schema: FlyCabinClassSchema,
    defaultValues: flyCabinClassDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyCabinClassDefaultValues,

      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyCabinClassFormSchema) => {
    submit({
      mutation: createFlyCabinClass.mutateAsync(values),

      success: "Fly cabin class created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyCabinClass> = {
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
      title="Create Fly Cabin Class"
      description="Create a new fly cabin class"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyCabinClass.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyCabinClassFormSchema>
              name="name"
              label="Name"
              placeholder="Business Class"
            />

            <FormInput<FlyCabinClassFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlyCabinClassFormSchema>
                name="description"
                label="Description"
                placeholder="Describe cabin class"
              />
            </div>
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyCabinClassFormSchema> name="active" label="Active" />

            <FormInput<FlyCabinClassFormSchema>
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
              disabled={createFlyCabinClass.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyCabinClass.isPending}>
              {createFlyCabinClass.isPending
                ? "Creating..."
                : "Create Cabin Class"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
