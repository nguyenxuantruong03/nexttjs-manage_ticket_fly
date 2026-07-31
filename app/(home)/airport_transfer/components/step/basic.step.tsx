"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
  FormSelect,
  FormTextarea,
} from "@/components/form/form-data";

import { AirportTransferServiceType } from "@/types/bookings/airport-transfer/enums";
import { AirportTransferFormSchema } from "../schema/core/schema";
import { SEARCH_PRIORITY_OPTIONS } from "@/types/bookings/search-prioty-score";
import { SearchTag } from "@/types/bookings/search/tag.types";
import FormMultiCombobox from "@/components/form/form-data/FormMultiCombobox";

interface BasicStepProps {
  searchTagData: SearchTag[];
}

const serviceTypeOptions = Object.values(AirportTransferServiceType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function BasicStep({ searchTagData }: BasicStepProps) {
  return (
    <>
      {/* Basic Information */}
      <FormSection
        title="Basic Information"
        description="General airport transfer information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="providerBookingId"
            label="Provider Booking ID"
            placeholder="Enter provider booking ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="name"
            label="Name"
            placeholder="Enter transfer name"
          />
          <FormSelect<AirportTransferFormSchema>
            name="serviceType"
            label="Service Type"
            options={serviceTypeOptions}
          />

          <FormSwitch<AirportTransferFormSchema>
            name="instantConfirmation"
            label="Instant Confirmation"
          />

          <FormSwitch<AirportTransferFormSchema> name="active" label="Active" />
        </div>
      </FormSection>

      {/* Search Metadata */}
      <FormSection
        title="Search Metadata"
        description="Search optimization fields"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<AirportTransferFormSchema>
            name="searchPriority"
            label="Search Priority"
            placeholder="Select search priority"
            options={SEARCH_PRIORITY_OPTIONS}
          />

          <FormSwitch<AirportTransferFormSchema>
            name="featured"
            label="Featured"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="searchable"
            label="Searchable"
          />
        </div>

        <div className="grid gap-6 mt-6">
          <FormMultiCombobox<AirportTransferFormSchema>
            name="tagIds"
            label="Tags"
            placeholder="Select tags..."
            searchPlaceholder="Search tags..."
            options={searchTagData.map((tag) => ({
              label: tag.name,
              value: tag.id,
            }))}
          />
        </div>
      </FormSection>

      {/* Capacity */}
      <FormSection title="Capacity" description="Transfer operation limits">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="capacity.maxTripsPerDay"
            label="Maximum Trips Per Day"
            type="number"
            placeholder="Enter maximum trips per day"
          />

          <FormInput<AirportTransferFormSchema>
            name="capacity.maxVehiclesPerDay"
            label="Maximum Vehicles Per Day"
            type="number"
            placeholder="Enter maximum vehicles per day"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="capacity.overbookingAllowed"
            label="Overbooking Allowed"
          />
        </div>
      </FormSection>

      {/* Notice */}
      <FormSection title="Notice" description="Customer notice information">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="notice.title"
            label="Title"
            placeholder="Enter notice title"
          />

          <FormInput<AirportTransferFormSchema>
            name="notice.color"
            label="Color"
            placeholder="e.g. blue, red, green"
          />

          <FormInput<AirportTransferFormSchema>
            name="notice.icon"
            label="Icon"
            placeholder="Enter icon name"
          />

          <FormInput<AirportTransferFormSchema>
            name="notice.priority"
            label="Priority"
            type="number"
            placeholder="Enter notice priority"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="notice.active"
            label="Active"
          />
        </div>

        <div className="mt-6">
          <FormTextarea<AirportTransferFormSchema>
            name="notice.description"
            label="Description"
            placeholder="Enter customer notice description"
          />
        </div>
      </FormSection>
    </>
  );
}
