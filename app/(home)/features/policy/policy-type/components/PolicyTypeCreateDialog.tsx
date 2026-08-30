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

import {
  PolicyTypeFormSchema,
  schema as PolicyTypeSchema,
} from "./form/schema";

import { policyTypeDefaultValues } from "./form/default-values";

import { useCreatePolicyType } from "@/hooks/features/policy-type";

import { PolicyType } from "@/types/common/features/policy/policy-type";

import BookingTypeCreateDialog from "@/app/(home)/commerce/booking-type/components/BookingTypeCreateDialog";

import { BookingType } from "@/types/common/commerce/booking-type";

import FormEntityMultiSelector from "@/components/form/form-data/FormMultiEntitySelector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createPolicyType = useCreatePolicyType();

  // ======================================================
  // BOOKING TYPE OPTIONS
  // ======================================================

  const bookingTypeOptions: EntityOption<BookingType>[] = bookingTypeData.map(
    (bookingType) => ({
      value: bookingType.id,
      label: bookingType.name,
      data: bookingType,
    }),
  );

  return (
    <EntityCreateFormDialog<PolicyTypeFormSchema, PolicyType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createPolicyType}
      config={{
        schema: PolicyTypeSchema,
        defaultValues: policyTypeDefaultValues,
        title: "Create Policy Type",
        description: "Create a new policy type",
        success: "Policy type created",
        submitText: "Create Policy Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<PolicyType> => ({
          value: response.id,
          label: response.name ?? "Policy Type",
          data: response,
        }),
      }}
    >
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

      <div className="grid gap-4 md:grid-cols-2">
        <FormEntityMultiSelector<PolicyTypeFormSchema, BookingType>
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
        <FormSwitch<PolicyTypeFormSchema> name="active" label="Active" />

        <FormInput<PolicyTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />
      </div>
    </EntityCreateFormDialog>
  );
}
