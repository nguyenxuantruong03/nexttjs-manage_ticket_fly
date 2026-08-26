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

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

import {
  PolicyTypeFormSchema,
  schema as PolicyTypeSchema,
} from "./form/schema";

import { policyTypeDefaultValues } from "./form/default-values";

import { useCreatePolicyType } from "@/hooks/features/policy-type";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { BookingType } from "@/types/common/commerce/booking-type";

// ======================================================
// PROPS
// ======================================================

interface PolicyTypeCreateDialogProps extends EntityCreateDialogProps<PolicyType> {
  bookingTypeData: BookingType[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function PolicyTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  bookingTypeData,
}: PolicyTypeCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createPolicyType = useCreatePolicyType();

  const { form } = useAppForm<PolicyTypeFormSchema>({
    schema: PolicyTypeSchema,

    defaultValues: policyTypeDefaultValues,
  });

  // ======================================================
  // RESET
  // ======================================================

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...policyTypeDefaultValues,

      name: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  // ======================================================
  // SUBMIT
  // ======================================================

  const onSubmit = (values: PolicyTypeFormSchema) => {
    submit({
      mutation: createPolicyType.mutateAsync(values),

      success: "Policy type created",

      onSuccess: (response) => {
        const result: EntityCreateResult<PolicyType> = {
          value: response.id,

          label: response.name ?? "Policy Type",

          data: response,
        };

        onCreated(result);

        form.reset();

        onOpenChange(false);
      },
    });
  };

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,

      label: bookingType.name,

      description: bookingType.description ?? undefined,

      data: bookingType,
    }),
  );

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
          {/* ======================================================
              BASIC
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<PolicyTypeFormSchema>
              name="name"
              label="Name"
              placeholder="Cancellation"
            />

            <FormInput<PolicyTypeFormSchema>
              name="icon"
              label="Icon"
              placeholder="https://..."
            />

            <div className="md:col-span-2">
              <FormTextarea<PolicyTypeFormSchema>
                name="description"
                label="Description"
                placeholder="Describe the policy type..."
              />
            </div>
          </div>

          {/* ======================================================
              BOOKING TYPE
          ====================================================== */}

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Booking Type</h3>

              <p className="text-sm text-muted-foreground">
                Select the booking type for this policy type
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormEntitySelector<PolicyTypeFormSchema, BookingType>
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
          </div>

          {/* ======================================================
              STATUS
          ====================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSwitch<PolicyTypeFormSchema> name="active" label="Active" />

            <FormInput<PolicyTypeFormSchema>
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
