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

import { useCreateFlyAircraft } from "@/hooks/product-types/references/airline/aircraft";

import { FlyAircraftFormSchema, FlyAircraftSchema } from "./form/schema";

import { flyAircraftDefaultValues } from "./form/default-values";
import { FlyAircraft } from "@/types/product-types/references/airline/aircraft/aircraft.types";

// ======================================================
// PROPS
// ======================================================

interface FlyAircraftCreateDialogProps extends EntityCreateDialogProps<FlyAircraft> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAircraftCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAircraftCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyAircraft = useCreateFlyAircraft();

  const { form } = useAppForm<FlyAircraftFormSchema>({
    schema: FlyAircraftSchema,
    defaultValues: flyAircraftDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyAircraftDefaultValues,
      model: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyAircraftFormSchema) => {
    submit({
      mutation: createFlyAircraft.mutateAsync(values),
      success: "Fly aircraft created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyAircraft> = {
          value: response.id,
          label:
            response.model ||
            response.registrationNumber ||
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
      title="Create Fly Aircraft"
      description="Create a new fly aircraft"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyAircraft.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyAircraftFormSchema>
              name="manufacturer"
              label="Manufacturer"
              placeholder="Airbus"
            />

            <FormInput<FlyAircraftFormSchema>
              name="model"
              label="Model"
              placeholder="A320-200"
            />

            <FormInput<FlyAircraftFormSchema>
              name="code"
              label="Code"
              placeholder="A320"
            />

            <FormInput<FlyAircraftFormSchema>
              name="registrationNumber"
              label="Registration Number"
              placeholder="VN-A123"
            />
          </div>

          {/* STATUS */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyAircraftFormSchema> name="active" label="Active" />
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFlyAircraft.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyAircraft.isPending}>
              {createFlyAircraft.isPending ? "Creating..." : "Create Aircraft"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
