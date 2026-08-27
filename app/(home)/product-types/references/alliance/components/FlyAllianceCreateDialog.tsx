"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { AppForm, FormInput } from "@/components/form/form-data";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { useAppForm } from "@/hooks/useAppForm";
import { useSubmit } from "@/hooks/useSubmit";

import { useCreateFlyAlliance } from "@/hooks/product-types/references/alliance";

import { flyAllianceDefaultValues } from "./form/default-values";

import { FlyAlliance } from "@/types/product-types/references/alliance/alliance.types";
import {
  FlyAllianceFormSchema,
  FlyAllianceSchema,
} from "./schema/alliance.schema";

interface FlyAllianceCreateDialogProps extends EntityCreateDialogProps<FlyAlliance> {}

export default function FlyAllianceCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: FlyAllianceCreateDialogProps) {
  const dialogRefAlliance = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createFlyAlliance = useCreateFlyAlliance();

  const { form } = useAppForm<FlyAllianceFormSchema>({
    schema: FlyAllianceSchema,
    defaultValues: flyAllianceDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...flyAllianceDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: any) => {
    submit({
      mutation: createFlyAlliance.mutateAsync(values),

      success: "Alliance created",

      onSuccess: (response) => {
        const result: EntityCreateResult<FlyAlliance> = {
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
      dialogRef={dialogRefAlliance}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Alliance"
      description="Create a new airline alliance"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createFlyAlliance.isPending}
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

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createFlyAlliance.isPending}>
              {createFlyAlliance.isPending ? "Creating..." : "Create Alliance"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
