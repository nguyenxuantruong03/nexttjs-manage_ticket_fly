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

import { useCreateFlyCrewDuty } from "@/hooks/product-types/references/airline/crew/crew-duty";

import { FlyCrewDutyFormSchema, FlyCrewDutySchema } from "./form/schema";

import { flyCrewDutyDefaultValues } from "./form/default-values";
import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";


// ======================================================
// PROPS
// ======================================================

interface FlyCrewDutyCreateDialogProps extends EntityCreateDialogProps<FlyCrewDuty> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCrewDutyCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyCrewDutyCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyCrewDuty = useCreateFlyCrewDuty();

  const { form } = useAppForm<FlyCrewDutyFormSchema>({
    schema: FlyCrewDutySchema,
    defaultValues: flyCrewDutyDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyCrewDutyDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyCrewDutyFormSchema) => {
    submit({
      mutation: createFlyCrewDuty.mutateAsync(values),

      success: "Fly crew duty created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyCrewDuty> = {
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
      title="Create Fly Crew Duty"
      description="Create a new fly crew duty"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyCrewDuty.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyCrewDutyFormSchema>
              name="name"
              label="Name"
              placeholder="Captain"
            />

            <FormInput<FlyCrewDutyFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlyCrewDutyFormSchema>
                name="description"
                label="Description"
                placeholder="Describe crew duty"
              />
            </div>
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyCrewDutyFormSchema> name="active" label="Active" />

            <FormInput<FlyCrewDutyFormSchema>
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
              disabled={createFlyCrewDuty.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyCrewDuty.isPending}>
              {createFlyCrewDuty.isPending ? "Creating..." : "Create Crew Duty"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
