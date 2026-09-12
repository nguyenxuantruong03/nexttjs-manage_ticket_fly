"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  DiningServiceTypeFormSchema,
  DiningServiceTypeSchema,
} from "./form/schema";

import { diningServiceTypeDefaultValues } from "./form/default-values";

import { useCreateHotelDiningServiceType } from "@/hooks/product-types/hotel/hotel-dining-service-type";

import { DiningServiceType } from "@/types/product-types/hotel/service/dinner-option.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface DiningServiceTypeCreateDialogProps extends EntityCreateDialogProps<DiningServiceType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function DiningServiceTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: DiningServiceTypeCreateDialogProps) {
  const createDiningServiceType = useCreateHotelDiningServiceType();

  return (
    <EntityCreateFormDialog<
      DiningServiceTypeFormSchema,
      Partial<DiningServiceType>,
      DiningServiceType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createDiningServiceType}
      config={{
        schema: DiningServiceTypeSchema,
        defaultValues: diningServiceTypeDefaultValues,
        title: "Create Dining Service Type",
        description: "Create a new dining service type",
        success: "Dining Service Type created",
        submitText: "Create Dining Service Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<DiningServiceType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<DiningServiceTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Dining service type name"
        />

        <FormIcon<DiningServiceTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<DiningServiceTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>

        <FormInput<DiningServiceTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<DiningServiceTypeFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
