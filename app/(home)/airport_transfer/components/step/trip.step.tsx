"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect } from "@/components/form/form-data";

import { AirportTransferTripStatus } from "@/types/bookings/airport-transfer/enums";
import { AirportTransferFormValues } from "../schema/core/schema";

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
          <FormInput<AirportTransferFormValues>
            name="trips.0.routeId"
            label="Route ID"
            placeholder="Enter route ID"
          />

          <FormInput<AirportTransferFormValues>
            name="trips.0.scheduleId"
            label="Schedule ID"
            placeholder="Enter schedule ID"
          />

          <FormInput<AirportTransferFormValues>
            name="trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormValues>
            name="trips.0.estimatedArrivalTime"
            label="Estimated Arrival Time"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormValues>
            name="trips.0.totalSeats"
            label="Total Seats"
            type="number"
            placeholder="Enter total seats"
          />

          <FormInput<AirportTransferFormValues>
            name="trips.0.availableSeats"
            label="Available Seats"
            type="number"
            placeholder="Enter available seats"
          />

          <FormSelect<AirportTransferFormValues>
            name="trips.0.status"
            label="Status"
            options={tripStatusOptions}
          />
        </div>
      </FormSection>

      {/* Vehicle Assignment */}
      <FormSection
        title="Vehicle Assignment"
        description="Assign vehicle and driver to trip"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="trips.0.vehicleAssignment.0.vehicleId"
            label="Vehicle ID"
            placeholder="Enter vehicle ID"
          />

          <FormInput<AirportTransferFormValues>
            name="trips.0.vehicleAssignment.0.driverId"
            label="Driver ID"
            placeholder="Enter driver ID"
          />
        </div>
      </FormSection>

      {/* Availability */}
      <FormSection
        title="Availability"
        description="Trip inventory availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="availability.calendars.0.date"
            label="Date"
            type="date"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.calendars.0.totalVehicles"
            label="Total Vehicles"
            type="number"
            placeholder="Enter total vehicles"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.calendars.0.remainingVehicles"
            label="Remaining Vehicles"
            type="number"
            placeholder="Enter remaining vehicles"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.calendars.0.minimumNoticeMinutes"
            label="Minimum Notice Minutes"
            type="number"
            placeholder="Enter minimum notice time"
          />
        </div>
      </FormSection>

      {/* Inventory Lock */}
      <FormSection
        title="Inventory Lock"
        description="Temporary trip reservation"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.tripId"
            label="Trip ID"
            placeholder="Enter trip ID"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.vehicleId"
            label="Vehicle ID"
            placeholder="Enter vehicle ID"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.bookingId"
            label="Booking ID"
            placeholder="Enter booking ID"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.userId"
            label="User ID"
            placeholder="Enter user ID"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.startTime"
            label="Start Time"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.endTime"
            label="End Time"
            type="datetime-local"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.quantity"
            label="Quantity"
            type="number"
            placeholder="Enter quantity"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.locks.0.expiresAt"
            label="Expires At"
            type="datetime-local"
          />
        </div>
      </FormSection>

      {/* Blackout Date */}
      <FormSection title="Blackout Dates" description="Unavailable dates">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormValues>
            name="availability.blackoutDates.0.date"
            label="Date"
            type="date"
          />

          <FormInput<AirportTransferFormValues>
            name="availability.blackoutDates.0.reason"
            label="Reason"
            placeholder="Enter blackout reason"
          />
        </div>
      </FormSection>

      {/* Capacity */}
      <FormSection title="Capacity" description="Operation limits">
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
        </div>
      </FormSection>
    </>
  );
}
