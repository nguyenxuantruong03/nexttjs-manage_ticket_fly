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

import { useCreateFlyFareRuleType } from "@/hooks/product-types/ticket-fly/fare-rule-type";

import {
  FlyFareRuleTypeFormSchema,
  FlyFareRuleTypeSchema,
} from "./form/schema";

import { flyFareRuleTypeDefaultValues } from "./form/default-values";
import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";


// ======================================================
// PROPS
// ======================================================

interface FlyFareRuleTypeCreateDialogProps extends EntityCreateDialogProps<FlyFareRuleType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyFareRuleTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyFareRuleTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyFareRuleType = useCreateFlyFareRuleType();

  const { form } = useAppForm<FlyFareRuleTypeFormSchema>({
    schema: FlyFareRuleTypeSchema,
    defaultValues: flyFareRuleTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyFareRuleTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyFareRuleTypeFormSchema) => {
    submit({
      mutation: createFlyFareRuleType.mutateAsync(values),

      success: "Fly fare rule type created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyFareRuleType> = {
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
      title="Create Fly Fare Rule Type"
      description="Create a new fly fare rule type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyFareRuleType.isPending}
      >
        <div className="space-y-6">
          {/* BASIC */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<FlyFareRuleTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Refund Policy"
            />

            <FormInput<FlyFareRuleTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormInput<FlyFareRuleTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe fare rule type"
              />
            </div>
          </div>

          {/* STATUS */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<FlyFareRuleTypeFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<FlyFareRuleTypeFormSchema>
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
              disabled={createFlyFareRuleType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyFareRuleType.isPending}>
              {createFlyFareRuleType.isPending
                ? "Creating..."
                : "Create Fare Rule Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
