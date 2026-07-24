// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput } from "@/components/form/form-data";

import { BusFormSchema } from "../schema/core/bus.schema";

export default function RoutesStep() {
  return (
    <>
      <FormSection
        title="Route Information"
        description="Departure and arrival"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.departureAddressId"
            label="Departure Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.arrivalAddressId"
            label="Arrival Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.distanceKm"
            label="Distance (Km)"
            type="number"
          />

          <FormInput<BusFormSchema>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (Minutes)"
            type="number"
          />

          <FormInput<BusFormSchema> name="routes.0.code" label="Route Code" />
        </div>
      </FormSection>

      <FormSection
        title="Boarding Points"
        description="Passenger boarding locations"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.addressId"
            label="Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.name"
            label="Name"
          />

          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.boardingPoints.0.order"
            label="Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection
        title="Dropoff Points"
        description="Passenger drop-off locations"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.addressId"
            label="Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.name"
            label="Name"
          />

          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.dropoffPoints.0.order"
            label="Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Route Stops" description="Intermediate stops">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.addressId"
            label="Address ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.stops.0.stopOrder"
            label="Stop Order"
            type="number"
          />
        </div>
      </FormSection>

      <FormSection title="Trips" description="Scheduled departures">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<BusFormSchema>
            name="routes.0.trips.0.vehicleId"
            label="Vehicle ID"
          />

          <FormInput<BusFormSchema>
            name="routes.0.trips.0.routeId"
            label="Route ID"
          />

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
    </>
  );
}
