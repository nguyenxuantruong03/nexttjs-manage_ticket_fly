"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  YachtConditionFormSchema,
  YachtConditionSchema,
} from "./form/schema";

import { yachtConditionDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateYachtCondition } from "@/hooks/product-types/yacht/condition";
import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

// ======================================================
// PROPS
// ======================================================

interface YachtConditionCreateDialogProps
  extends EntityCreateDialogProps<YachtCondition> {}

// ======================================================
// COMPONENT
// ======================================================

export default function YachtConditionCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: YachtConditionCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createYachtCondition = useCreateYachtCondition();

  const { form } = useAppForm<YachtConditionFormSchema>({
    schema: YachtConditionSchema,
    defaultValues: yachtConditionDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...yachtConditionDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: YachtConditionFormSchema) => {
    submit({
      mutation: createYachtCondition.mutateAsync(values),

      success: "Yacht condition created",

      onSuccess: (response) => {
        const result: EntityCreateResult<YachtCondition> = {
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
      title="Create Yacht Condition"
      description="Create a new yacht condition"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createYachtCondition.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<YachtConditionFormSchema>
              name="name"
              label="Name"
              placeholder="Excellent"
            />

            <div className="md:col-span-2">
              <FormInput<YachtConditionFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the yacht condition"
              />
            </div>
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<YachtConditionFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<YachtConditionFormSchema>
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
              disabled={createYachtCondition.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createYachtCondition.isPending}
            >
              {createYachtCondition.isPending
                ? "Creating..."
                : "Create Condition"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}