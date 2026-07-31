"use client";

import * as React from "react";

import {
  AppForm,
  FormCombobox,
  FormInput,
  FormTextarea,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import { PolicyFormSchema, PolicySchema } from "./form/schema";

import { policyDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";
import {
  HotelPolicy,
  HotelPolicyType,
} from "@/types/bookings/hotel/policy.type";
import { useCreateHotelPolicy } from "@/hooks/hotel/hotel-policy";
import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";
import PolicyTypeCreateDialog from "../../policy-type/components/PolictyTypeCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface PolicyCreateDialogProps extends EntityCreateDialogProps<HotelPolicy> {
  policyTypes: HotelPolicyType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PolicyCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  policyTypes,
}: PolicyCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPolicy = useCreateHotelPolicy();

  const { form } = useAppForm<PolicyFormSchema>({
    schema: PolicySchema,
    defaultValues: policyDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...policyDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: PolicyFormSchema) => {
    submit({
      mutation: createPolicy.mutateAsync(values),

      success: "Policy created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelPolicy> = {
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

  const policyTypeOptions: EntityOption<HotelPolicyType>[] = policyTypes.map(
    (type) => ({
      value: type.id,
      label: type.name,
      description: type.description ?? undefined,
      data: type,
    }),
  );

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Policy"
      description="Create a new policy"
    >
      <AppForm form={form} onSubmit={onSubmit} loading={createPolicy.isPending}>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PolicyFormSchema>
              name="name"
              label="Name"
              placeholder="Policy name"
            />

            <FormCombobox<PolicyFormSchema>
              portalContainer={dialogRef.current}
              name="typeId"
              label="Policy Type"
              placeholder="Select policy type"
              searchPlaceholder="Search policy type..."
              options={policyTypes.map((type) => ({
                label: type.name,
                value: type.id,
              }))}
            />

            <FormEntitySelector<PolicyFormSchema, HotelPolicyType>
              portalContainer={dialogRef.current}
              name="typeId"
              label="Policy Type"
              placeholder="Search policy type..."
              searchPlaceholder="Search policy type..."
              emptyText="No policy type found"
              createText="Create policy type"
              options={policyTypeOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <PolicyTypeCreateDialog {...props} />
              )}
            />

            <div className="md:col-span-2">
              <FormTextarea<PolicyFormSchema>
                name="description"
                label="Description"
                placeholder="Policy description"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createPolicy.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createPolicy.isPending}>
              {createPolicy.isPending ? "Creating..." : "Create Policy"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
