// step/trips.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";


import {
  FlyTripStatus,
  FlyOperationStatus,
  FlyTimelineType,
} from "@/types/bookings/ticket-fly/enums";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

const tripStatusOptions = Object.values(FlyTripStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const operationStatusOptions = Object.values(FlyOperationStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const timelineTypeOptions = Object.values(FlyTimelineType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function TripsStep() {
  return (
    <>
      <FormSection title="Trip Information" description="Flight trip details">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="trips.0.routeId"
            label="Route ID"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.flightNumber"
            label="Flight Number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.durationMinutes"
            label="Duration Minutes"
            type="number"
          />

          <FormSelect<TicketFlyFormValues>
            name="trips.0.status"
            label="Status"
            options={tripStatusOptions}
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.availableSeats"
            label="Available Seats"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.aircraftId"
            label="Aircraft ID"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.scheduleId"
            label="Schedule ID"
          />
        </div>
      </FormSection>

      <FormSection title="Inventory" description="Seat inventory">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.cabinClass"
            label="Cabin Class"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.totalSeats"
            label="Total Seats"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.availableSeats"
            label="Available Seats"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.reservedSeats"
            label="Reserved Seats"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.blockedSeats"
            label="Blocked Seats"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.overbookLimit"
            label="Overbook Limit"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.inventory.cabins.0.waitlistSeats"
            label="Waitlist Seats"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Operation" description="Flight operation status">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<TicketFlyFormValues>
            name="trips.0.operation.status"
            label="Operation Status"
            options={operationStatusOptions}
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.departureTerminal"
            label="Departure Terminal"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.departureGate"
            label="Departure Gate"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.arrivalTerminal"
            label="Arrival Terminal"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.arrivalGate"
            label="Arrival Gate"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.baggageClaim"
            label="Baggage Claim"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.checkInCounter"
            label="Check In Counter"
          />
        </div>
      </FormSection>

      <FormSection title="Tracking" description="Flight location tracking">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="trips.0.tracking.0.latitude"
            label="Latitude"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.tracking.0.longitude"
            label="Longitude"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.tracking.0.altitudeFt"
            label="Altitude FT"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.tracking.0.speedKmh"
            label="Speed KMH"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.tracking.0.heading"
            label="Heading"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.tracking.0.lastUpdated"
            label="Last Updated"
            type="datetime-local"
          />
        </div>
      </FormSection>

      <FormSection title="Timeline" description="Operation timeline">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<TicketFlyFormValues>
            name="trips.0.operation.timeline.0.type"
            label="Timeline Type"
            options={timelineTypeOptions}
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.timeline.0.eventTime"
            label="Event Time"
            type="datetime-local"
          />

          <FormInput<TicketFlyFormValues>
            name="trips.0.operation.timeline.0.note"
            label="Note"
          />
        </div>
      </FormSection>
    </>
  );
}
