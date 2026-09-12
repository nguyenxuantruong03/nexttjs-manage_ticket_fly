"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { BusSeatTypeFormSchema, BusSeatTypeSchema } from "./form/schema";

import { busSeatTypeDefaultValues } from "./form/default-values";

import { BusSeatType } from "@/types/product-types/bus/bus-seat-type";

import { useCreateBusSeatType } from "@/hooks/product-types/bus/seat-type";
import { FormIcon } from "@/components/form/form-data/FormIcon";

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
  const createBusSeatType = useCreateBusSeatType();

  return (
    <EntityCreateFormDialog<
      BusSeatTypeFormSchema,
      Partial<BusSeatType>,
      BusSeatType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createBusSeatType}
      config={{
        schema: BusSeatTypeSchema,
        defaultValues: busSeatTypeDefaultValues,
        title: "Create Bus Seat Type",
        description: "Create a new bus seat type",
        success: "Bus seat type created",
        submitText: "Create Seat Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<BusSeatType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
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

          <FormIcon<BusSeatTypeFormSchema>
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
      </div>
    </EntityCreateFormDialog>
  );
}
