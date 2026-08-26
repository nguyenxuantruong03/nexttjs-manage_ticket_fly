"use client";

import * as React from "react";

import { AppForm, FormCombobox, FormInput } from "@/components/form/form-data";
import { Button } from "@/components/ui/button";

import { useSubmit } from "@/hooks/useSubmit";
import { useAppForm } from "@/hooks/useAppForm";

import {
  HotelCheckInPolicySchema,
  HotelCheckInPolicySchemaForm,
} from "./form/schema";

import { hotelCheckInPolicyDefaultValues } from "./form/default-values";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useCreateHotelCheckInPolicy } from "@/hooks/product-types/hotel/hotel-check-in-policy";
import { Hotel } from "@/types/product-types/hotel/core/hotel.types";
import { HotelCheckInPolicy } from "@/types/product-types/hotel/hotel-check-in-policy.type";

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
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createHotelCheckInPolicy = useCreateHotelCheckInPolicy();

  const { form } = useAppForm<HotelCheckInPolicySchemaForm>({
    schema: HotelCheckInPolicySchema,
    defaultValues: hotelCheckInPolicyDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...hotelCheckInPolicyDefaultValues,
      hotelId: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: HotelCheckInPolicySchemaForm) => {
    submit({
      mutation: createHotelCheckInPolicy.mutateAsync(values),

      success: "Hotel check-in policy created",

      onSuccess: (response) => {
        const result: EntityCreateResult<HotelCheckInPolicy> = {
          value: response.id,
          label: response.hotelId ?? response.id,
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
      title="Create Hotel Check-In Policy"
      description="Configure the hotel's check-in policy"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createHotelCheckInPolicy.isPending}
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

          {/* ======================================================
              ACTIONS
          ====================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createHotelCheckInPolicy.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createHotelCheckInPolicy.isPending}>
              {createHotelCheckInPolicy.isPending
                ? "Creating..."
                : "Create Policy"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
