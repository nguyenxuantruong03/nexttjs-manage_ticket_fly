"use client";

import * as React from "react";

import { FormCombobox, FormInput } from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/form/entity-selector";

import {
  HotelCheckInPolicySchema,
  HotelCheckInPolicySchemaForm,
} from "./form/schema";

import { hotelCheckInPolicyDefaultValues } from "./form/default-values";

import { useCreateHotelCheckInPolicy } from "@/hooks/product-types/hotel/hotel-check-in-policy";

import { Hotel } from "@/types/product-types/hotel/core/hotel.types";

import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

// ======================================================
// PROPS
// ======================================================

interface HotelCheckInPolicyCreateDialogProps extends EntityCreateDialogProps<HotelCheckInPolicy> {
  hotelData: Hotel[];
}

// ======================================================
// COMPONENT
// ======================================================

export default function HotelCheckInPolicyCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  hotelData,
}: HotelCheckInPolicyCreateDialogProps) {
  const createHotelCheckInPolicy = useCreateHotelCheckInPolicy();

  return (
    <EntityCreateFormDialog<
      HotelCheckInPolicySchemaForm,
      Partial<HotelCheckInPolicy>,
      HotelCheckInPolicy
    >
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createHotelCheckInPolicy}
      config={{
        schema: HotelCheckInPolicySchema,
        defaultValues: hotelCheckInPolicyDefaultValues,
        title: "Create Hotel Check-In Policy",
        description: "Configure the hotel's check-in policy",
        success: "Hotel check-in policy created",
        submitText: "Create Policy",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<HotelCheckInPolicy> => ({
          value: response.id,
          label: response.hotelId ?? response.id,
          data: response,
        }),
      }}
    >
      <div className="space-y-6">
        {/* ======================================================
            BASIC
        ====================================================== */}

        <div className="grid gap-4">
          <FormCombobox<HotelCheckInPolicySchemaForm>
            name="hotelId"
            label="Hotel"
            options={hotelData.map((hotel) => ({
              label: hotel.name,
              value: hotel.id,
            }))}
            placeholder="Select hotel"
          />
        </div>

        {/* ======================================================
            CHECK-IN
        ====================================================== */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<HotelCheckInPolicySchemaForm>
            name="checkInFrom"
            label="Check-In From"
            placeholder="e.g. 14:00"
          />

          <FormInput<HotelCheckInPolicySchemaForm>
            name="checkInUntil"
            label="Check-In Until"
            placeholder="e.g. 22:00"
          />
        </div>

        {/* ======================================================
            CHECK-OUT
        ====================================================== */}

        <div className="grid gap-4 md:grid-cols-2">
          <FormInput<HotelCheckInPolicySchemaForm>
            name="checkOutUntil"
            label="Check-Out Until"
            placeholder="e.g. 12:00"
          />

          <FormInput<HotelCheckInPolicySchemaForm>
            name="minimumAge"
            label="Minimum Age"
            type="number"
            placeholder="e.g. 18"
          />
        </div>
      </div>
    </EntityCreateFormDialog>
  );
}
