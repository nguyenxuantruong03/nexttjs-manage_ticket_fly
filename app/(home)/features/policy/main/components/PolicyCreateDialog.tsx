"use client";

import {
  FormInput,
  FormSwitch,
  FormTextarea,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
  EntityOption,
} from "@/components/entity-selector";

import FormEntitySelector from "@/components/form/form-data/FormEntitySelector";

import { PolicyFormSchema, schema as PolicySchema } from "./form/schema";

import { policyDefaultValues } from "./form/default-values";

import { useCreatePolicy } from "@/hooks/features/policy";

import { Policy } from "@/types/common/features/policy/policy";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import { BookingType } from "@/types/common/commerce/booking-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import PolicyTypeCreateDialog from "../../policy-type/components/PolicyTypeCreateDialog";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface PolicyCreateDialogProps extends EntityCreateDialogProps<Policy> {
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
  const createPolicy = useCreatePolicy();

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

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<PolicyFormSchema, Policy>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPolicy}
      config={{
        schema: PolicySchema,
        defaultValues: policyDefaultValues,
        title: "Create Policy",
        description: "Create a new policy",
        success: "Policy created",
        submitText: "Create Policy",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<Policy> => ({
          value: response.id,
          label: response.name ?? "Policy",
          data: response,
        }),
      }}
    >
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
        <FormEntitySelector<PolicyFormSchema, PolicyType>
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

        <FormEntityMultiSelector<PolicyFormSchema, BookingType>
          name="bookingTypeIds"
          label="Booking Types"
          placeholder="Search booking types..."
          searchPlaceholder="Search booking types..."
          emptyText="No booking types found"
          createText="Create booking type"
          options={bookingTypeOptions}
          enableCreate
          renderCreateDialog={(props) => <BookingTypeCreateDialog {...props} />}
        />
      </div>

      {/* ======================================================
          STATUS
      ====================================================== */}

      <div className="grid gap-4 md:grid-cols-2">
        <FormSwitch<PolicyFormSchema> name="active" label="Active" />

        <FormInput<PolicyFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
