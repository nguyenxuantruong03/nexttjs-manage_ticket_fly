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

import { useCreateFlyDelayReason } from "@/hooks/product-types/ticket-fly/delay-reason";

import { FlyDelayReasonFormSchema, FlyDelayReasonSchema } from "./form/schema";

import { flyDelayReasonDefaultValues } from "./form/default-values";

import { FlyDelayReason } from "@/types/product-types/ticket-fly/fly-delay-reason";

// ======================================================
// PROPS
// ======================================================

interface FlyDelayReasonCreateDialogProps extends EntityCreateDialogProps<FlyDelayReason> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyDelayReasonCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyDelayReasonCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyDelayReason = useCreateFlyDelayReason();

  const { form } = useAppForm<FlyDelayReasonFormSchema>({
    schema: FlyDelayReasonSchema,
    defaultValues: flyDelayReasonDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyDelayReasonDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyDelayReasonFormSchema) => {
    submit({
      mutation: createFlyDelayReason.mutateAsync(values),

      success: "Fly delay reason created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyDelayReason> = {
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
      title="Create Fly Delay Reason"
      description="Create a new fly delay reason"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyDelayReason.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyDelayReasonFormSchema>
              name="name"
              label="Name"
              placeholder="Weather Delay"
            />

            <FormInput<FlyDelayReasonFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlyDelayReasonFormSchema>
                name="description"
                label="Description"
                placeholder="Describe delay reason"
              />
            </div>
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyDelayReasonFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<FlyDelayReasonFormSchema>
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
              disabled={createFlyDelayReason.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyDelayReason.isPending}>
              {createFlyDelayReason.isPending
                ? "Creating..."
                : "Create Delay Reason"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
