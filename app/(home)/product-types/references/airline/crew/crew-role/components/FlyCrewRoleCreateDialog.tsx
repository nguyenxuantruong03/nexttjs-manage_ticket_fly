"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useCreateFlyCrewRole } from "@/hooks/product-types/references/airline/crew/crew-role";

import { FlyCrewRoleFormSchema, FlyCrewRoleSchema } from "./form/schema";

import { flyCrewRoleDefaultValues } from "./form/default-values";

import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface FlyCrewRoleCreateDialogProps extends EntityCreateDialogProps<FlyCrewRole> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCrewRoleCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyCrewRoleCreateDialogProps) {
  const createFlyCrewRole = useCreateFlyCrewRole();

  return (
    <EntityCreateFormDialog<FlyCrewRoleFormSchema, FlyCrewRole>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyCrewRole}
      config={{
        schema: FlyCrewRoleSchema,
        defaultValues: flyCrewRoleDefaultValues,
        title: "Create Fly Crew Role",
        description: "Create a new fly crew role",
        success: "Fly crew role created",
        submitText: "Create Crew Role",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyCrewRole> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyCrewRoleFormSchema>
            name="name"
            label="Name"
            placeholder="Captain"
          />

          <FormInput<FlyCrewRoleFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlyCrewRoleFormSchema>
              name="description"
              label="Description"
              placeholder="Describe crew role"
            />
          </div>
        </div>

        {/* STATUS */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyCrewRoleFormSchema> name="active" label="Active" />

          <FormInput<FlyCrewRoleFormSchema>
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
