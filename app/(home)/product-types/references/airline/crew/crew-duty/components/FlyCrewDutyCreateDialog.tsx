"use client";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import { useCreateFlyCrewDuty } from "@/hooks/product-types/references/airline/crew/crew-duty";

import { FlyCrewDutyFormSchema, FlyCrewDutySchema } from "./form/schema";

import { flyCrewDutyDefaultValues } from "./form/default-values";

import { FlyCrewDuty } from "@/types/product-types/references/airline/crew/crew-duty/fly-crew-duty";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";
import { FormIcon } from "@/components/form/form-data/FormIcon";

// ======================================================
// PROPS
// ======================================================

interface FlyCrewDutyCreateDialogProps extends EntityCreateDialogProps<FlyCrewDuty> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCrewDutyCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyCrewDutyCreateDialogProps) {
  const createFlyCrewDuty = useCreateFlyCrewDuty();

  return (
    <EntityCreateFormDialog<FlyCrewDutyFormSchema, Partial<FlyCrewDuty>,FlyCrewDuty>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createFlyCrewDuty}
      config={{
        schema: FlyCrewDutySchema,
        defaultValues: flyCrewDutyDefaultValues,
        title: "Create Fly Crew Duty",
        description: "Create a new fly crew duty",
        success: "Fly crew duty created",
        submitText: "Create Crew Duty",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<FlyCrewDuty> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* BASIC */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<FlyCrewDutyFormSchema>
            name="name"
            label="Name"
            placeholder="Captain"
          />

          <FormIcon<FlyCrewDutyFormSchema>
            name="icon"
            label="Icon"
            placeholder="https://..."
          />

          <div className="md:col-span-2">
            <FormInput<FlyCrewDutyFormSchema>
              name="description"
              label="Description"
              placeholder="Describe crew duty"
            />
          </div>
        </div>

        {/* STATUS */}
        <div className="grid gap-4 md:grid-cols-2">
          <FormSwitch<FlyCrewDutyFormSchema> name="active" label="Active" />

          <FormInput<FlyCrewDutyFormSchema>
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
