"use client";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { YachtConditionFormSchema, YachtConditionSchema } from "./form/schema";

import { yachtConditionDefaultValues } from "./form/default-values";

import { useCreateYachtCondition } from "@/hooks/product-types/yacht/condition";

import { YachtCondition } from "@/types/product-types/yacht/yacht-condition";

// ======================================================
// PROPS
// ======================================================

interface YachtConditionCreateDialogProps extends EntityCreateDialogProps<YachtCondition> {}

// ======================================================
// COMPONENT
// ======================================================

export default function YachtConditionCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: YachtConditionCreateDialogProps) {
  const createYachtCondition = useCreateYachtCondition();

  return (
    <EntityCreateFormDialog<
      YachtConditionFormSchema,
      Partial<YachtCondition>,
      YachtCondition
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createYachtCondition}
      config={{
        schema: YachtConditionSchema,
        defaultValues: yachtConditionDefaultValues,
        title: "Create Yacht Condition",
        description: "Create a new yacht condition",
        success: "Yacht condition created",
        submitText: "Create Condition",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<YachtCondition> => ({
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
          <FormSwitch<YachtConditionFormSchema> name="active" label="Active" />

          <FormInput<YachtConditionFormSchema>
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
