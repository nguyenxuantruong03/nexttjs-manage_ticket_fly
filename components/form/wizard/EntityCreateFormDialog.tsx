"use client";

import * as React from "react";

import { FieldValues, UseFormReturn } from "react-hook-form";

import { AppForm } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

// ======================================================
// TYPES
// ======================================================

interface EntityCreateFormDialogConfig<
  TFormValues extends FieldValues,
  TEntity,
> {
  schema: any;

  defaultValues: TFormValues;

  title: string;

  description: string;

  success: string;

  submitText: string;

  submittingText: string;

  getResult: (response: TEntity) => EntityCreateResult<TEntity>;
}

interface EntityCreateFormDialogProps<
  TFormValues extends FieldValues,
  TEntity,
> extends EntityCreateDialogProps<TEntity> {
  config: EntityCreateFormDialogConfig<TFormValues, TEntity>;

  mutation: any;

  children:
    | React.ReactNode
    | ((form: UseFormReturn<TFormValues>) => React.ReactNode);
}

// ======================================================
// COMPONENT
// ======================================================

export default function EntityCreateFormDialog<
  TFormValues extends FieldValues,
  TEntity,
>({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  config,
  mutation,
  children,
}: EntityCreateFormDialogProps<TFormValues, TEntity>) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const { form } = useAppForm<TFormValues>({
    schema: config.schema,
    defaultValues: config.defaultValues,
  });

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...config.defaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form, config.defaultValues]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: TFormValues) => {
    submit({
      mutation: mutation.mutateAsync(values),

      success: config.success,

      onSuccess: (response: TEntity) => {
        const result = config.getResult(response);

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  const content = typeof children === "function" ? children(form) : children;

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title={config.title}
      description={config.description}
    >
      <AppForm form={form} onSubmit={onSubmit} loading={mutation.isPending}>
        <div className="space-y-6">
          {content}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={mutation.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={mutation.isPending}>
              {mutation.isPending ? config.submittingText : config.submitText}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
