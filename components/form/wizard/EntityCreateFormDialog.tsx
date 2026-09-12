"use client";

import * as React from "react";

import { FieldValues, UseFormReturn } from "react-hook-form";

import { ZodType, ZodTypeDef } from "zod";

import { AppForm } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateDialog from "@/components/form/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

// ======================================================
// CONFIG
// ======================================================

interface EntityCreateFormDialogConfig<
  TFormValues extends FieldValues,
  TEntity,
> {
  schema: ZodType<TFormValues, ZodTypeDef, unknown>;

  defaultValues: TFormValues;

  title: string;

  description: string;

  success: string;

  submitText: string;

  submittingText: string;

  getResult: (response: TEntity) => EntityCreateResult<TEntity>;
}

// ======================================================
// MUTATION
// ======================================================

export interface EntityCreateMutation<TCreateInput> {
  mutateAsync: (values: TCreateInput) => Promise<unknown>;
}

// ======================================================
// PROPS
// ======================================================

interface EntityCreateFormDialogProps<
  TFormValues extends FieldValues,
  TCreateInput,
  TEntity,
> extends EntityCreateDialogProps<TEntity> {
  config: EntityCreateFormDialogConfig<TFormValues, TEntity>;

  mutation: EntityCreateMutation<TCreateInput>;

  transformValues?: (values: TFormValues) => TCreateInput;

  children:
    | React.ReactNode
    | ((form: UseFormReturn<TFormValues>) => React.ReactNode);
}

// ======================================================
// COMPONENT
// ======================================================

export default function EntityCreateFormDialog<
  TFormValues extends FieldValues,
  TCreateInput,
  TEntity,
>({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  config,
  mutation,
  transformValues,
  children,
}: EntityCreateFormDialogProps<TFormValues, TCreateInput, TEntity>) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  // ====================================================
  // FORM
  // ====================================================

  const { form } = useAppForm<TFormValues>({
    schema: config.schema,
    defaultValues: config.defaultValues,
  });

  const isSubmitting = form.formState.isSubmitting;

  // ====================================================
  // RESET
  // ====================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...config.defaultValues,

      ...(defaultKeyword !== undefined
        ? {
            name: defaultKeyword,
          }
        : {}),
    });
  }, [open, defaultKeyword, form, config.defaultValues]);

  // ====================================================
  // SUBMIT
  // ====================================================

  const onSubmit = async (values: TFormValues) => {
    const payload = transformValues
      ? transformValues(values)
      : (values as unknown as TCreateInput);

    await submit({
      form,

      mutation: () => mutation.mutateAsync(payload),

      success: config.success,

      onSuccess: (response: unknown) => {
        const result = config.getResult(response as TEntity);

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  // ====================================================
  // CHILDREN
  // ====================================================

  const content = typeof children === "function" ? children(form) : children;

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title={config.title}
      description={config.description}
    >
      <AppForm form={form} onSubmit={onSubmit} loading={isSubmitting}>
        <div className="space-y-6">
          {content}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? config.submittingText : config.submitText}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
