"use client";

import * as React from "react";

import { AppForm, FormInput, FormSwitch } from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  YachtCrewRoleFormSchema,
  YachtCrewRoleSchema,
} from "./form/schema";

import { yachtCrewRoleDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { useCreateYachtCrewRole } from "@/hooks/product-types/yacht/crew-role";
import { YachtCrewRole } from "@/types/product-types/yacht/yacht-crew-role";

// ======================================================
// PROPS
// ======================================================

interface YachtCrewRoleCreateDialogProps
  extends EntityCreateDialogProps<YachtCrewRole> {}

// ======================================================
// COMPONENT
// ======================================================

export default function YachtCrewRoleCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: YachtCrewRoleCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createYachtCrewRole = useCreateYachtCrewRole();

  const { form } = useAppForm<YachtCrewRoleFormSchema>({
    schema: YachtCrewRoleSchema,
    defaultValues: yachtCrewRoleDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...yachtCrewRoleDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: YachtCrewRoleFormSchema) => {
    submit({
      mutation: createYachtCrewRole.mutateAsync(values),

      success: "Yacht crew role created",

      onSuccess: (response) => {
        const result: EntityCreateResult<YachtCrewRole> = {
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
      title="Create Yacht Crew Role"
      description="Create a new yacht crew role"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createYachtCrewRole.isPending}
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
            <FormSwitch<YachtCrewRoleFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<YachtCrewRoleFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />
          </div>

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createYachtCrewRole.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createYachtCrewRole.isPending}
            >
              {createYachtCrewRole.isPending
                ? "Creating..."
                : "Create Crew Role"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}