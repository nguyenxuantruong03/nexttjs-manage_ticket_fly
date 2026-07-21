// step/schedule.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import { BusBoardingStatus, BusTripStatus } from "@/types/bookings/bus/enums";

import { BusFormValues } from "../schema/core/bus.schema";

const tripStatusOptions = Object.values(BusTripStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const boardingStatusOptions = Object.values(BusBoardingStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function ScheduleStep() {
  return (
    <>
      <FormSection title="Departure & Arrival" description="Trip schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="routes.0.trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormInput<BusFormValues>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (Minutes)"
            type="number"
          />

          <FormInput<BusFormValues>
            name="routes.0.distanceKm"
            label="Distance (Km)"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Trip Status" description="Current trip status">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormValues>
            name="routes.0.trips.0.routeId"
            label="Route ID"
          />

          <FormInput<BusFormValues>
            name="routes.0.trips.0.vehicleId"
            label="Vehicle ID"
          />

          <FormSelect<BusFormValues>
            name="routes.0.trips.0.status"
            label="Trip Status"
            options={tripStatusOptions}
          />

          <FormSelect<BusFormValues>
            name="routes.0.trips.0.boardingStatus"
            label="Boarding Status"
            options={boardingStatusOptions}
          />
        </div>
      </FormSection>
    </>
  );
}
