"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlyCabinClass } from "@/hooks/product-types/ticket-fly/cabin-class";

import { FlyCabinClassFormSchema, FlyCabinClassSchema } from "./form/schema";

import { flyCabinClassDefaultValues } from "./form/default-values";

import { FlyCabinClass } from "@/types/product-types/ticket-fly/fly-cabin-class";

// ======================================================
// PROPS
// ======================================================

interface FlyCabinClassCreateDialogProps extends EntityCreateDialogProps<FlyCabinClass> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCabinClassCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyCabinClassCreateDialogProps) {
  const createFlyCabinClass = useCreateFlyCabinClass();

  return (
    <EntityCreateFormDialog<FlyCabinClassFormSchema, FlyCabinClass>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyCabinClass}
      config={{
        schema: FlyCabinClassSchema,
        defaultValues: flyCabinClassDefaultValues,
        title: "Create Fly Cabin Class",
        description: "Create a new fly cabin class",
        success: "Fly cabin class created",
        submitText: "Create Cabin Class",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyCabinClass> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyCabinClassFormSchema>
            name="name"
            label="Name"
            placeholder="Business Class"
          />

          <FormInput<FlyCabinClassFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlyCabinClassFormSchema>
              name="description"
              label="Description"
              placeholder="Describe cabin class"
            />
          </div>
        </div>

        {/* STATUS */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyCabinClassFormSchema> name="active" label="Active" />

          <FormInput<FlyCabinClassFormSchema>
            name="sortOrder"
            label="Sort Order"
            type="number"
            placeholder="0"
          />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
