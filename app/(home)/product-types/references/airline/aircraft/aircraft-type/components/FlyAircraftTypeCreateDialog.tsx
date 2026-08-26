"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import {
  AppForm,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import {
  useCreateFlyAircraftType,
} from "@/hooks/product-types/references/airline/aircraft/aircraft-type";

import {
  FlyAircraftTypeFormSchema,
  FlyAircraftTypeSchema,
} from "./form/schema";

import {
  flyAircraftTypeDefaultValues,
} from "./form/default-values";
import { FlyAircraftType } from "@/types/product-types/references/airline/aircraft/aircraft-type.type";


// ======================================================
// PROPS
// ======================================================

interface FlyAircraftTypeCreateDialogProps
  extends EntityCreateDialogProps<FlyAircraftType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAircraftTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAircraftTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyAircraftType = useCreateFlyAircraftType();

  const { form } = useAppForm<FlyAircraftTypeFormSchema>({
    schema: FlyAircraftTypeSchema,
    defaultValues: flyAircraftTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyAircraftTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyAircraftTypeFormSchema) => {
    submit({
      mutation: createFlyAircraftType.mutateAsync(values),

      success: "Fly aircraft type created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyAircraftType> = {
          value: response.id,

          label:
            response.name ||
            response.code ||
            response.manufacturer ||
            response.id,

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
      title="Create Fly Aircraft Type"
      description="Create a new fly aircraft type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyAircraftType.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyAircraftTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Airbus A320"
            />

            <FormInput<FlyAircraftTypeFormSchema>
              name="code"
              label="Code"
              placeholder="A320"
            />

            <FormInput<FlyAircraftTypeFormSchema>
              name="manufacturer"
              label="Manufacturer"
              placeholder="Airbus"
            />

            <FormInput<FlyAircraftTypeFormSchema>
              name="description"
              label="Description"
              placeholder="Airbus A320 aircraft type"
            />
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyAircraftTypeFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<FlyAircraftTypeFormSchema>
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
              disabled={createFlyAircraftType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createFlyAircraftType.isPending}
            >
              {createFlyAircraftType.isPending
                ? "Creating..."
                : "Create Aircraft Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}