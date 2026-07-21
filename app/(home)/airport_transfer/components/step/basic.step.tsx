"use client";

import FormSection from "@/components/form/FormSection";

import {
  FormInput,
  FormSwitch,
  FormSelect,
  FormTextarea,
} from "@/components/form/form-data";

import { AirportTransferServiceType } from "@/types/bookings/airport-transfer/enums";
import { AirportTransferFormValues } from "../schema/core/schema";

const serviceTypeOptions = Object.values(AirportTransferServiceType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function BasicStep() {
  return (
    <>
      {/* Basic Information */}
      <FormSection
        title="Basic Information"
        description="General airport transfer information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="providerBookingId"
            label="Provider Booking ID"
            placeholder="Enter provider booking ID"
          />

          <FormInput<AirportTransferFormValues>
            name="name"
            label="Name"
            placeholder="Enter transfer name"
          />

          <FormInput<AirportTransferFormValues>
            name="slug"
            label="Slug"
            placeholder="airport-transfer-example"
          />

          <FormSelect<AirportTransferFormValues>
            name="serviceType"
            label="Service Type"
            options={serviceTypeOptions}
          />

          <FormSwitch<AirportTransferFormValues>
            name="instantConfirmation"
            label="Instant Confirmation"
          />

          <FormSwitch<AirportTransferFormValues>
            name="active"
            label="Active"
          />
        </div>
      </FormSection>

      {/* Search Metadata */}
      <FormSection
        title="Search Metadata"
        description="Search optimization fields"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="searchText"
            label="Search Text"
            placeholder="Enter searchable text"
          />

          <FormInput<AirportTransferFormValues>
            name="searchPriority"
            label="Search Priority"
            type="number"
            placeholder="Enter priority number"
          />

          <FormSwitch<AirportTransferFormValues>
            name="featured"
            label="Featured"
          />

          <FormSwitch<AirportTransferFormValues>
            name="searchable"
            label="Searchable"
          />
        </div>

        <div className="grid gap-6 mt-6">
          <FormInput<AirportTransferFormValues>
            name="aliases.0"
            label="Alias"
            placeholder="Enter alternative name"
          />

          <FormInput<AirportTransferFormValues>
            name="keywords.0"
            label="Keyword"
            placeholder="Enter search keyword"
          />

          <FormInput<AirportTransferFormValues>
            name="tags.0"
            label="Tag"
            placeholder="Enter tag"
          />
        </div>
      </FormSection>

      {/* Capacity */}
      <FormSection
        title="Capacity"
        description="Transfer operation limits"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="capacity.maxTripsPerDay"
            label="Maximum Trips Per Day"
            type="number"
            placeholder="Enter maximum trips per day"
          />

          <FormInput<AirportTransferFormValues>
            name="capacity.maxVehiclesPerDay"
            label="Maximum Vehicles Per Day"
            type="number"
            placeholder="Enter maximum vehicles per day"
          />

          <FormSwitch<AirportTransferFormValues>
            name="capacity.overbookingAllowed"
            label="Overbooking Allowed"
          />
        </div>
      </FormSection>

      {/* Notice */}
      <FormSection
        title="Notice"
        description="Customer notice information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="notice.title"
            label="Title"
            placeholder="Enter notice title"
          />

          <FormInput<AirportTransferFormValues>
            name="notice.color"
            label="Color"
            placeholder="e.g. blue, red, green"
          />

          <FormInput<AirportTransferFormValues>
            name="notice.icon"
            label="Icon"
            placeholder="Enter icon name"
          />

          <FormInput<AirportTransferFormValues>
            name="notice.priority"
            label="Priority"
            type="number"
            placeholder="Enter notice priority"
          />

          <FormSwitch<AirportTransferFormValues>
            name="notice.active"
            label="Active"
          />
        </div>

        <div className="mt-6">
          <FormTextarea<AirportTransferFormValues>
            name="notice.description"
            label="Description"
            placeholder="Enter customer notice description"
          />
        </div>
      </FormSection>
    </>
  );
}