"use client";

import * as React from "react";

import { AppForm, FormTextarea } from "@/components/form/form-data";
import { FormInput } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { AccessibilityFormSchema, AccessibilitySchema } from "./form/schema";

import { accessibilityDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { Accessibility } from "@/types/bookings/hotel/hotel-detail.type";
import { useCreateHotelAccessibility } from "@/hooks/hotel/hotel-accessibility";

// ======================================================
// PROPS
// ======================================================

interface AccessibilityCreateDialogProps extends EntityCreateDialogProps<Accessibility> {}

// ======================================================
// COMPONENT
// ======================================================

export default function AccessibilityCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: AccessibilityCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createAccessibility = useCreateHotelAccessibility();

  const { form } = useAppForm<AccessibilityFormSchema>({
    schema: AccessibilitySchema,
    defaultValues: accessibilityDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...accessibilityDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: AccessibilityFormSchema) => {
    submit({
      mutation: createAccessibility.mutateAsync(values),

      success: "Accessibility created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Accessibility> = {
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
      title="Create Accessibility"
      description="Create a new accessibility"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createAccessibility.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4">
            <FormInput<AccessibilityFormSchema>
              name="name"
              label="Name"
              placeholder="Accessibility name"
            />

            <FormTextarea<AccessibilityFormSchema>
              name="description"
              label="Description"
              placeholder="Description"
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createAccessibility.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createAccessibility.isPending}>
              {createAccessibility.isPending
                ? "Creating..."
                : "Create Accessibility"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
