"use client";

import {
  FormCombobox,
  FormInput,
  FormSelect,
  FormTextarea,
  FormSwitch,
} from "@/components/form/form-data";

import {
  EntityCreateDialogProps,
  EntityCreateResult,
} from "@/components/entity-selector";

import EntityCreateFormDialog from "@/components/form/wizard/EntityCreateFormDialog";

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
  const createProviderBooking = useCreateProviderBooking();

  return (
    <EntityCreateFormDialog<ProviderBookingFormSchema, ProviderBooking>
      open={open}
      onOpenChange={onOpenChange}
      defaultKeyword={defaultKeyword}
      onCreated={onCreated}
      mutation={createProviderBooking}
      config={{
        schema: ProviderBookingSchema,
        defaultValues: providerBookingDefaultValues,
        title: "Create Provider Booking",
        description: "Create a booking service provider",
        success: "Provider created",
        submitText: "Create Provider",
        submittingText: "Creating...",
        getResult: (response): EntityCreateResult<ProviderBooking> => ({
          value: response.id,
          label: response.displayName ?? "Provider",
          data: response,
        }),
      }}
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
      </div>
    </EntityCreateFormDialog>
  );
}
