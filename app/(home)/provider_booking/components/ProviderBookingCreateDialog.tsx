"use client";

import * as React from "react";

import {
  AppForm,
  FormCombobox,
  FormInput,
  FormSelect,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import { Button } from "@/components/ui/button";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateDialog from "@/components/entity-selector/EntityCreateDialog";

import { useSubmit } from "@/hooks/useSubmit";

import { useAppForm } from "@/hooks/useAppForm";

import {
  ProviderBookingFormSchema,
  schema as ProviderBookingSchema,
} from "./form/schema";

import { providerBookingDefaultValues } from "./form/default-values";

import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

import { useCreateProviderBooking } from "@/hooks/provider-booking";

import {
  ProviderBooking,
  ProviderOperatingStatus,
  ProviderStatus,
} from "@/types/users/provider-bookings";

import { Address } from "@/types/location/address";
import { BookingType } from "@/types/common/commerce/booking-type";

// ======================================================
// PROPS
// ======================================================

interface ProviderBookingCreateDialogProps extends EntityCreateDialogProps<ProviderBooking> {
  addresses: Address[];

  bookingTypes: BookingType[];
}

// ======================================================
// OPTIONS
// ======================================================

const statusOptions = Object.values(ProviderStatus).map((value) => ({
  label: value.replaceAll("_", " "),
  value,
}));

const operatingStatusOptions = Object.values(ProviderOperatingStatus).map(
  (value) => ({
    label: value.replaceAll("_", " "),
    value,
  }),
);

// ======================================================
// COMPONENT
// ======================================================

export default function ProviderBookingCreateDialog({
  open,
  onOpenChange,
  defaultKeyword,
  onCreated,
  addresses,
  bookingTypes,
}: ProviderBookingCreateDialogProps) {
  const dialogRef = React.useRef<HTMLDivElement>(null);

  const submit = useSubmit();

  const createProviderBooking = useCreateProviderBooking();

  const { form } = useAppForm<ProviderBookingFormSchema>({
    schema: ProviderBookingSchema,
    defaultValues: providerBookingDefaultValues,
  });

  React.useEffect(() => {
    if (!open) return;

    form.reset({
      ...providerBookingDefaultValues,
      displayName: defaultKeyword ?? "",
    });
  }, [open, defaultKeyword, form]);

  const onSubmit = (values: ProviderBookingFormSchema) => {
    submit({
      mutation: createProviderBooking.mutateAsync(values),

      success: "Provider created",

      onSuccess: (response) => {
        const result: EntityCreateResult<ProviderBooking> = {
          value: response.id,
          label: response.displayName ?? "Provider",
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
      title="Create Provider Booking"
      description="Create a booking service provider"
    >
      <AppForm
        form={form}
        onSubmit={onSubmit}
        loading={createProviderBooking.isPending}
      >
        <div className="space-y-6">
          {/* ================================================== */}
          {/* BASIC */}
          {/* ================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ProviderBookingFormSchema>
              name="displayName"
              label="Display Name"
              placeholder="Provider name"
            />

            <FormInput<ProviderBookingFormSchema>
              name="officialName"
              label="Official Name"
              placeholder="Official company name"
            />

            <FormInput<ProviderBookingFormSchema>
              name="shortName"
              label="Short Name"
              placeholder="Short name"
            />

            <FormInput<ProviderBookingFormSchema>
              name="subtitle"
              label="Subtitle"
              placeholder="Subtitle"
            />
          </div>

          <FormTextarea<ProviderBookingFormSchema>
            name="description"
            label="Description"
            placeholder="Provider description"
          />

          {/* ================================================== */}
          {/* COMPANY */}
          {/* ================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ProviderBookingFormSchema>
              name="companyType"
              label="Company Type"
              placeholder="Company type"
            />

            <FormInput<ProviderBookingFormSchema>
              name="registrationNumber"
              label="Registration Number"
              placeholder="Registration number"
            />

            <FormInput<ProviderBookingFormSchema>
              name="taxCode"
              label="Tax Code"
              placeholder="Tax code"
            />

            <FormInput<ProviderBookingFormSchema>
              name="licenseNumber"
              label="License Number"
              placeholder="License number"
            />
          </div>

          {/* ================================================== */}
          {/* CONTACT */}
          {/* ================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ProviderBookingFormSchema>
              name="email"
              label="Email"
              placeholder="Email"
            />

            <FormInput<ProviderBookingFormSchema>
              name="phone"
              label="Phone"
              placeholder="Phone"
            />

            <FormInput<ProviderBookingFormSchema>
              name="hotline"
              label="Hotline"
              placeholder="Hotline"
            />

            <FormInput<ProviderBookingFormSchema>
              name="website"
              label="Website"
              placeholder="https://"
            />
          </div>

          {/* ================================================== */}
          {/* ADDRESS */}
          {/* ================================================== */}

          <FormCombobox<ProviderBookingFormSchema>
            portalContainer={dialogRef.current}
            name="addressId"
            label="Address"
            placeholder="Select address"
            searchPlaceholder="Search address..."
            options={addresses.map((item) => ({
              label: item.name ?? "",
              value: item.id,
            }))}
          />

          {/* ================================================== */}
          {/* SOCIAL */}
          {/* ================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormInput<ProviderBookingFormSchema>
              name="facebook"
              label="Facebook"
              placeholder="Facebook URL"
            />

            <FormInput<ProviderBookingFormSchema>
              name="instagram"
              label="Instagram"
              placeholder="Instagram URL"
            />

            <FormInput<ProviderBookingFormSchema>
              name="youtube"
              label="Youtube"
              placeholder="Youtube URL"
            />

            <FormInput<ProviderBookingFormSchema>
              name="linkedin"
              label="LinkedIn"
              placeholder="LinkedIn URL"
            />
          </div>

          {/* ================================================== */}
          {/* STATUS */}
          {/* ================================================== */}

          <div className="grid gap-4 md:grid-cols-2">
            <FormSelect<ProviderBookingFormSchema>
              name="status"
              label="Status"
              options={statusOptions}
            />

            <FormSelect<ProviderBookingFormSchema>
              name="operatingStatus"
              label="Operating Status"
              options={operatingStatusOptions}
            />
          </div>

          {/* ================================================== */}
          {/* BOOKING TYPES */}
          {/* ================================================== */}

          <FormMultiCombobox<ProviderBookingFormSchema>
            name="bookingTypeIds"
            label="Services"
            placeholder="Select services..."
            searchPlaceholder="Search services..."
            options={bookingTypes.map((bookingType) => ({
              label: bookingType.name,
              value: bookingType.id,
            }))}
          />

          {/* ================================================== */}
          {/* VERIFIED */}
          {/* ================================================== */}

          <FormSwitch<ProviderBookingFormSchema>
            name="verified"
            label="Verified"
          />

          {/* ================================================== */}
          {/* ACTION */}
          {/* ================================================== */}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              disabled={createProviderBooking.isPending}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={createProviderBooking.isPending}>
              {createProviderBooking.isPending
                ? "Creating..."
                : "Create Provider"}
            </Button>
          </div>
        </div>
      </AppForm>
    </EntityCreateDialog>
  );
}
