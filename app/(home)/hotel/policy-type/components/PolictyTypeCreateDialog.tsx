"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { PolicyTypeFormSchema, PolicyTypeSchema } from "./form/schema";

import { policyTypeDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import { HotelPolicyType } from "@/types/bookings/hotel/policy.type";
import { useCreateHotelPolicyType } from "@/hooks/hotel/hotel-policy-type";

// ======================================================
// PROPS
// ======================================================

interface PolicyTypeCreateDialogProps extends EntityCreateDialogProps<HotelPolicyType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function PolicyTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: PolicyTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPolicyType = useCreateHotelPolicyType();

  const { form } = useAppForm<PolicyTypeFormSchema>({
    schema: PolicyTypeSchema,
    defaultValues: policyTypeDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...policyTypeDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: PolicyTypeFormSchema) => {
    submit({
      mutation: createPolicyType.mutateAsync(values),

      success: "Policy Type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelPolicyType> = {
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
      title="Create Policy Type"
      description="Create a new policy type"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPolicyType.isPending}
      >
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PolicyTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Policy type name"
            />

            <FormInput<PolicyTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="Icon"
            />

            <div className="md:col-span-2">
              <FormTextarea<PolicyTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Description"
              />
            </div>

            <FormInput<PolicyTypeFormSchema>
              name="sortOrder"
              label="Sort Order"
              type="number"
              placeholder="0"
            />

            <FormSwitch<PolicyTypeFormSchema> name="active" label="Active" />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPolicyType.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPolicyType.isPending}>
              {createPolicyType.isPending
                ? "Creating..."
                : "Create Policy Type"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
