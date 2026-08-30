"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

import { YachtCrewRoleFormSchema, YachtCrewRoleSchema } from "./form/schema";

import { yachtCrewRoleDefaultValues } from "./form/default-values";

import { useCreateYachtCrewRole } from "@/hooks/product-types/yacht/crew-role";

import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

// ======================================================
// PROPS
// ======================================================

interface YachtCrewRoleCreateDialogProps extends EntityCreateDialogProps<YachtCrewRole> {}

// ======================================================
// COMPONENT
// ======================================================

export default function YachtCrewRoleCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: YachtCrewRoleCreateDialogProps) {
  const createYachtCrewRole = useCreateYachtCrewRole();

  return (
    <EntityCreateFormDialog<YachtCrewRoleFormSchema, YachtCrewRole>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createYachtCrewRole}
      config={{
        schema: YachtCrewRoleSchema,
        defaultValues: yachtCrewRoleDefaultValues,
        title: "Create Yacht Crew Role",
        description: "Create a new yacht crew role",
        success: "Yacht crew role created",
        submitText: "Create Crew Role",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<YachtCrewRole> => ({
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
          <FormInput<YachtCrewRoleFormSchema>
            name="name"
            label="Name"
            placeholder="Captain"
          />

          <FormInput<YachtCrewRoleFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<YachtCrewRoleFormSchema>
              name="description"
              label="Description"
              placeholder="Describe the yacht crew role"
            />
          </div>
        </div>

        {/* ======================================================
            STATUS
        ====================================================== */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<YachtCrewRoleFormSchema> name="active" label="Active" />

          <FormInput<YachtCrewRoleFormSchema>
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
