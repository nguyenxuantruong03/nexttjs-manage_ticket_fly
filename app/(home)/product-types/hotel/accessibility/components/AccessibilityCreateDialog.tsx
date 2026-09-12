"use client";

import { FormInput, FormTextarea } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { AccessibilityFormSchema, AccessibilitySchema } from "./form/schema";

import { accessibilityDefaultValues } from "./form/default-values";

import { useCreateHotelAccessibility } from "@/hooks/product-types/hotel/hotel-accessibility";

import { Accessibility } from "@/types/product-types/hotel/hotel-detail";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createAccessibility = useCreateHotelAccessibility();

  return (
    <EntityCreateFormDialog<
      AccessibilityFormSchema,
      Partial<Accessibility>,
      Accessibility
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createAccessibility}
      config={{
        schema: AccessibilitySchema,
        defaultValues: accessibilityDefaultValues,
        title: "Create Accessibility",
        description: "Create a new accessibility",
        success: "Accessibility created",
        submitText: "Create Accessibility",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Accessibility> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
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
    </EntityCreateFormDialog>
  );
}
