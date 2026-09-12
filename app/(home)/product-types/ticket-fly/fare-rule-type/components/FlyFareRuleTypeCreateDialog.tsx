"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlyFareRuleType } from "@/hooks/product-types/ticket-fly/fare-rule-type";

import {
  FlyFareRuleTypeFormSchema,
  FlyFareRuleTypeSchema,
} from "./form/schema";

import { flyFareRuleTypeDefaultValues } from "./form/default-values";

import { FlyFareRuleType } from "@/types/product-types/ticket-fly/pricing/fare-rule-type";
import { FormIcon } from "@/components/form/form-data/FormIcon";

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
  const createFlyFareRuleType = useCreateFlyFareRuleType();

  return (
    <EntityCreateFormDialog<
      FlyFareRuleTypeFormSchema,
      Partial<FlyFareRuleType>,
      FlyFareRuleType
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyFareRuleType}
      config={{
        schema: FlyFareRuleTypeSchema,
        defaultValues: flyFareRuleTypeDefaultValues,
        title: "Create Fly Fare Rule Type",
        description: "Create a new fly fare rule type",
        success: "Fly fare rule type created",
        submitText: "Create Fare Rule Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyFareRuleType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyFareRuleTypeFormSchema>
            name="name"
            label="Name"
            placeholder="Refund Policy"
          />

          <FormIcon<FlyFareRuleTypeFormSchema>
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
          <FormSwitch<FlyFareRuleTypeFormSchema> name="active" label="Active" />

          <FormInput<FlyFareRuleTypeFormSchema>
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
