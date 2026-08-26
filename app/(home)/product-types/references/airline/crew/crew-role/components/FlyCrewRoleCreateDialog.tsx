"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import {
  AppForm,
  FormInput,
  FormSwitch,
} from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";

import { useSubmit } from "@/hooks/useSubmit";

import { useCreateFlyCrewRole } from "@/hooks/product-types/references/airline/crew/crew-role";

import {
  FlyCrewRoleFormSchema,
  FlyCrewRoleSchema,
} from "./form/schema";

import { flyCrewRoleDefaultValues } from "./form/default-values";
import { FlyCrewRole } from "@/types/product-types/references/airline/crew/crew-role/fly-crew-role";


// ======================================================
// PROPS
// ======================================================

interface FlyCrewRoleCreateDialogProps
  extends EntityCreateDialogProps<FlyCrewRole> {}

// ======================================================
// COMPONENT
// ======================================================

export default function FlyCrewRoleCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyCrewRoleCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyCrewRole = useCreateFlyCrewRole();

  const { form } = useAppForm<FlyCrewRoleFormSchema>({
    schema: FlyCrewRoleSchema,
    defaultValues: flyCrewRoleDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyCrewRoleDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: FlyCrewRoleFormSchema) => {
    submit({
      mutation: createFlyCrewRole.mutateAsync(values),
      success: "Fly crew role created",

      onSuccess(response) {
        const result: EntityCreateResult<FlyCrewRole> = {
          value: response.id,
          label: response.name,
          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Fly Crew Role"
      description="Create a new fly crew role"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyCrewRole.isPending}
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
            <FormSwitch<FlyCrewRoleFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<FlyCrewRoleFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ACTION */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createFlyCrewRole.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createFlyCrewRole.isPending}
            >
              {createFlyCrewRole.isPending
                ? "Creating..."
                : "Create Crew Role"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}