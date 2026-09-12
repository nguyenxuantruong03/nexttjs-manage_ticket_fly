"use client";

import { FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { useCreateFlyAlliance } from "@/hooks/product-types/references/alliance";

import { flyAllianceDefaultValues } from "./form/default-values";

import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";

import {
  FlyAllianceFormSchema,
  FlyAllianceSchema,
} from "./schema/alliance.schema";

// ======================================================
// PROPS
// ======================================================

interface FlyAllianceCreateDialogProps extends EntityCreateDialogProps<FlyAlliance> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyAllianceCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAllianceCreateDialogProps) {
  const createFlyAlliance = useCreateFlyAlliance();

  return (
    <EntityCreateFormDialog<
      FlyAllianceFormSchema,
      Partial<FlyAlliance>,
      FlyAlliance
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyAlliance}
      config={{
        schema: FlyAllianceSchema,
        defaultValues: flyAllianceDefaultValues,
        title: "Create Alliance",
        description: "Create a new airline alliance",
        success: "Alliance created",
        submitText: "Create Alliance",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyAlliance> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyAllianceFormSchema>
            name="name"
            label="Alliance Name"
            placeholder="Star Alliance"
          />

          <FormInput<FlyAllianceFormSchema>
            name="code"
            label="Alliance Code"
            placeholder="STAR"
          />

          <FormInput<FlyAllianceFormSchema>
            name="logo"
            label="Logo"
            placeholder="https://example.com/logo.png"
          />

          <FormInput<FlyAllianceFormSchema>
            name="description"
            label="Description"
            placeholder="Global airline alliance"
          />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
