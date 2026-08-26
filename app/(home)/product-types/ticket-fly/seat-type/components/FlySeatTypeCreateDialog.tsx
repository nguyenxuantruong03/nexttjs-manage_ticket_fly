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

import { useCreateFlySeatType } from "@/hooks/product-types/ticket-fly/seat-type";

import { FlySeatTypeFormSchema, FlySeatTypeSchema } from "./form/schema";

import { flySeatTypeDefaultValues } from "./form/default-values";

import { FlySeatType } from "@/types/product-types/ticket-fly/fly-seat-type";

// ======================================================
// PROPS
// ======================================================

interface FlySeatTypeCreateDialogProps extends EntityCreateDialogProps<FlySeatType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlySeatTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlySeatTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlySeatType = useCreateFlySeatType();

  const { form } = useAppForm<FlySeatTypeFormSchema>({
    schema: FlySeatTypeSchema,
    defaultValues: flySeatTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flySeatTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlySeatTypeFormSchema) => {
    submit({
      mutation: createFlySeatType.mutateAsync(values),

      success: "Fly seat type created",

      onSuccess(response) {
        const result: EntityCreateResult<FlySeatType> = {
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
      title="Create Fly Seat Type"
      description="Create a new fly seat type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlySeatType.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlySeatTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Economy"
            />

            <FormInput<FlySeatTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlySeatTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe seat type"
              />
            </div>
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlySeatTypeFormSchema> name="active" label="Active" />

            <FormInput<FlySeatTypeFormSchema>
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
              disabled={createFlySeatType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlySeatType.isPending}>
              {createFlySeatType.isPending ? "Creating..." : "Create Seat Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
