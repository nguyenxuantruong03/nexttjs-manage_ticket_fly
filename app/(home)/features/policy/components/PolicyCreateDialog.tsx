"use client";

import * as React from "react";

import {
  AppForm,
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

import {
  PolicyFormSchema,
  schema as PolicySchema,
} from "./form/schema";

import { policyDefaultValues } from "./form/default-values";

import { useCreatePolicy } from "@/hooks/features/policy";

import { Policy } from "@/types/common/features/policy/policy";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import PolicyTypeCreateDialog from "../../policy-type/components/PolicyTypeCreateDialog";

// ======================================================
// PROPS
// ======================================================

interface PolicyCreateDialogProps
  extends EntityCreateDialogProps<Policy> {
  policyTypeData: PolicyType[];

  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PolicyCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  policyTypeData,
  bookingTypeData,
}: PolicyCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPolicy = useCreatePolicy();

  const { form } = useAppForm<PolicyFormSchema>({
    schema: PolicySchema,

    defaultValues: policyDefaultValues,
  });

  // ======================================================
  // OPTIONS
  // ======================================================

  const policyTypeOptions: EntityOption<PolicyType>[] =
    policyTypeData?.map((policyType) => ({
      value: policyType.id,
      label: policyType.name,
      description: policyType.description ?? undefined,
      data: policyType,
    })) ?? [];

  const bookingTypeOptions: EntityOption<BookingType>[] =
    bookingTypeData?.map((bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      description: bookingType.description ?? undefined,
      data: bookingType,
    })) ?? [];

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...policyDefaultValues,
      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: PolicyFormSchema) => {
    submit({
      mutation: createPolicy.mutateAsync(values),

      success: "Policy created",

      onSuccess: (response) => {
        const result: EntityCreateResult<Policy> = {
          value: response.id,

          label: response.name ?? "Policy",

          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  // ======================================================
  // RENDER
  // ======================================================

  return (
    <EntityCreateDialog
      dialogRef={dialogRef}
      open={open}
      onOpenChange={onOpenChange}
      title="Create Policy"
      description="Create a new policy"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createPolicy.isPending}
      >
        <div className="space-y-6">
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PolicyFormSchema>
              name="name"
              label="Name"
              placeholder="Cancellation Policy"
            />

             <FormInput<PolicyFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormTextarea<PolicyFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the policy..."
              />
            </div>
          </div>

          {/* ======================================================
              POLICY TYPE
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormEntitySelector<
              PolicyFormSchema,
              PolicyType
            >
              name="typeId"
              label="Policy Type"
              placeholder="Search policy type..."
              searchPlaceholder="Search policy type..."
              emptyText="No policy type found"
              createText="Create policy type"
              options={policyTypeOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <PolicyTypeCreateDialog
                  {...props}
                  bookingTypeData={bookingTypeData}
                />
              )}
            />

            <FormEntitySelector<
              PolicyFormSchema,
              BookingType
            >
              name="bookingTypeId"
              label="Booking Type"
              placeholder="Search booking type..."
              searchPlaceholder="Search booking type..."
              emptyText="No booking type found"
              createText="Create booking type"
              options={bookingTypeOptions}
              enableCreate
              renderCreateDialog={(props) => (
                <BookingTypeCreateDialog {...props} />
              )}
            />
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<PolicyFormSchema>
              name="active"
              label="Active"
            />

            <FormInput<PolicyFormSchema>
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
              disabled={createPolicy.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={createPolicy.isPending}
            >
              {createPolicy.isPending
                ? "Creating..."
                : "Create Policy"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}