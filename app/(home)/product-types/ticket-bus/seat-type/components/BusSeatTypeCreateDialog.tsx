"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { BusSeatTypeFormSchema, BusSeatTypeSchema } from "./form/schema";

import { busSeatTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";
import { useCreateBusSeatType } from "@/hooks/product-types/bus/seat-type";

// ======================================================
// PROPS
// ======================================================

interface BusSeatTypeCreateDialogProps extends EntityCreateDialogProps<BusSeatType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function BusSeatTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: BusSeatTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createBusSeatType = useCreateBusSeatType();

  const { form } = useAppForm<BusSeatTypeFormSchema>({
    schema: BusSeatTypeSchema,
    defaultValues: busSeatTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...busSeatTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: BusSeatTypeFormSchema) => {
    submit({
      mutation: createBusSeatType.mutateAsync(values),

      success: "Bus seat type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<BusSeatType> = {
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
      title="Create Bus Seat Type"
      description="Create a new bus seat type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createBusSeatType.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<BusSeatTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Standard Seat"
            />

            <FormInput<BusSeatTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<BusSeatTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the bus seat type"
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<BusSeatTypeFormSchema> name="active" label="Active" />

            <FormInput<BusSeatTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createBusSeatType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createBusSeatType.isPending}>
              {createBusSeatType.isPending ? "Creating..." : "Create Seat Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
