"use client";

import {
  FormInput,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import { RatePlanTypeFormSchema, RatePlanTypeSchema } from "./form/schema";

import { ratePlanTypeDefaultValues } from "./form/default-values";

import { HotelRatePlanType } from "@/types/product-types/hotel/pricing/rate-plan.types";

import { useCreateHotelRatePlanType } from "@/hooks/product-types/hotel/hotel-rate-plan-type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface RatePlanTypeCreateDialogProps extends EntityCreateDialogProps<HotelRatePlanType> {}

// ======================================================
// COMPONENT
// ======================================================

export default function RatePlanTypeCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
}: RatePlanTypeCreateDialogProps) {
  const createRatePlanType = useCreateHotelRatePlanType();

  return (
    <EntityCreateFormDialog<RatePlanTypeFormSchema, HotelRatePlanType>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createRatePlanType}
      config={{
        schema: RatePlanTypeSchema,
        defaultValues: ratePlanTypeDefaultValues,
        title: "Create Rate Plan Type",
        description: "Create a new rate plan type",
        success: "Rate Plan Type created",
        submitText: "Create Rate Plan Type",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<HotelRatePlanType> => ({
          value: response.id,
          label: response.name,
          data: response,
        }),
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput<RatePlanTypeFormSchema>
          name="name"
          label="Name"
          placeholder="Rate plan type name"
        />

        <FormInput<RatePlanTypeFormSchema>
          name="icon"
          label="Icon"
          placeholder="Icon"
        />

        <div className="md:col-span-2">
          <FormTextarea<RatePlanTypeFormSchema>
            name="description"
            label="Description"
            placeholder="Description"
          />
        </div>

        <FormInput<RatePlanTypeFormSchema>
          name="sortOrder"
          label="Sort Order"
          type="number"
          placeholder="0"
        />

        <FormSwitch<RatePlanTypeFormSchema> name="active" label="Active" />
      </div>
    </EntityCreateFormDialog>
  );
}
