// step/schedule.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import { BusFormSchema } from "../form/schema/core/bus.schema";
import {
  BusBoardingStatus,
  BusTripStatus,
  BusSeatAvailabilityStatus,
} from "@/types/product-types/bus/enums";

const tripStatusOptions = Object.values(BusTripStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const boardingStatusOptions = Object.values(BusBoardingStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const seatAvailabilityOptions = Object.values(BusSeatAvailabilityStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function ScheduleStep() {
  return (
    <>
      <FormSection title="Departure & Arrival" description="Trip schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />
        </div>
      </FormSection>

      <FormSection title="Trip Status" description="Current trip status">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<BusFormSchema>
            name="routes.0.trips.0.status"
            label="Trip Status"
            options={tripStatusOptions}
          />

          <FormSelect<BusFormSchema>
            name="routes.0.trips.0.boardingStatus"
            label="Boarding Status"
            options={boardingStatusOptions}
          />
        </div>
      </FormSection>

      <FormSection
        title="Seat Availability"
        description="Current seat inventory"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.seatId"
            label="Seat ID"
          />

          <FormSelect<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.status"
            label="Status"
            options={seatAvailabilityOptions}
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.availableSeats"
            label="Available Seats"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.soldSeats"
            label="Sold Seats"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.reservedSeats"
            label="Reserved Seats"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.totalSeats"
            label="Total Seats"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.seatAvailability.0.currentPrice"
            label="Current Price"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}