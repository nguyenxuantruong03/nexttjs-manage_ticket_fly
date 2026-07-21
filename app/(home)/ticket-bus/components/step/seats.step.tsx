// step/seats.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import {
  BusSeatAvailabilityStatus,
  BusSeatType,
} from "@/types/bookings/bus/enums";
import { InventoryLockStatus } from "@/types/common/enums";

import { BusFormValues } from "../schema/core/bus.schema";

const seatTypeOptions = Object.values(BusSeatType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const seatAvailabilityOptions = Object.values(BusSeatAvailabilityStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const inventoryLockStatusOptions = Object.values(InventoryLockStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function SeatsStep() {
  return (
    <>
      <FormSection title="Seat Layout" description="Seat layout configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.seatLayout.0.name"
            label="Layout Name"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seatLayout.0.seatRows"
            label="Seat Rows"
            type="number"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seatLayout.0.seatColumns"
            label="Seat Columns"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Seat Map" description="Seat map configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.seatMap.imageUrl"
            label="Image URL"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seatMap.svgUrl"
            label="SVG URL"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seatMap.jsonLayout"
            label="JSON Layout"
          />
        </div>
      </FormSection>

      <FormSection title="Seats" description="Seat configuration">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.seats.0.seatNumber"
            label="Seat Number"
          />

          <FormSelect<BusFormValues>
            name="vehicles.0.seats.0.type"
            label="Seat Type"
            options={seatTypeOptions}
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seats.0.floor"
            label="Floor"
            type="number"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seats.0.row"
            label="Row"
            type="number"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.seats.0.column"
            label="Column"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Seat Availability"
        description="Current seat inventory"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.seatId"
            label="Seat ID"
          />

          <FormSelect<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.status"
            label="Status"
            options={seatAvailabilityOptions}
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.availableSeats"
            label="Available Seats"
            type="number"
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.soldSeats"
            label="Sold Seats"
            type="number"
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.reservedSeats"
            label="Reserved Seats"
            type="number"
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.totalSeats"
            label="Total Seats"
            type="number"
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.seatAvailability.0.currentPrice"
            label="Current Price"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Inventory Lock"
        description="Temporary seat reservation"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.vehicleId"
            label="Vehicles ID"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.tripId"
            label="Trip ID"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.userId"
            label="User ID"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.startTime"
            label="Start Time"
            type="datetime-local"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.endTime"
            label="End Time"
            type="datetime-local"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.expiresAt"
            label="Expires At"
            type="datetime-local"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.releasedAt"
            label="Released At"
            type="datetime-local"
          />

          <FormInput<BusFormValues>
            name="vehicles.0.locks.0.quantity"
            label="Quantity"
            type="number"
          />

          <FormSelect<BusFormValues>
            name="vehicles.0.locks.0.status"
            label="Lock Status"
            options={inventoryLockStatusOptions}
          />
        </div>
      </FormSection>
    </>
  );
}
