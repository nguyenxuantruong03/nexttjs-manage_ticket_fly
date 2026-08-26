"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { AirportTransferFormSchema } from "../schema/core/schema";
import { AirportTransferTripStatus } from "@/types/product-types/airport-transfer/enums";

const tripStatusOptions = Object.values(AirportTransferTripStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function TripStep() {
  return (
    <>
      {/* Trip Information */}
      <FormSection
        title="Trip Information"
        description="Transfer trip schedule and operation"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="routes.0.trips.0.routeId"
            label="Route ID"
            placeholder="Enter route ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.trips.0.scheduleId"
            label="Schedule ID"
            placeholder="Enter schedule ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.trips.0.estimatedArrivalTime"
            label="Estimated Arrival Time"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.trips.0.totalSeats"
            label="Total Seats"
            type="number"
            placeholder="Enter total seats"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.trips.0.availableSeats"
            label="Available Seats"
            type="number"
            placeholder="Enter available seats"
          />

          <FormSelect<AirportTransferFormSchema>
            name="routes.0.trips.0.status"
            label="Status"
            options={tripStatusOptions}
          />
        </div>
      </FormSection>
    </>
  );
}