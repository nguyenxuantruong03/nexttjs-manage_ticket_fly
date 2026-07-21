// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";
import { YachtFormValues } from "../schema/core/yacht.schema";


export default function RoutesStep() {
  return (
    <>
      {/* ======================================================
          ROUTE INFORMATION
      ====================================================== */}

      <FormSection
        title="Route Information"
        description="Yacht departure and destination route"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="routes.0.departureMarinaId"
            label="Departure Marina ID"
          />

          <FormInput<YachtFormValues>
            name="routes.0.destinationMarinaId"
            label="Destination Marina ID"
          />

          <FormInput<YachtFormValues>
            name="routes.0.destinationName"
            label="Destination Name"
          />

          <FormInput<YachtFormValues>
            name="routes.0.distanceNm"
            label="Distance (NM)"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="routes.0.durationMinutes"
            label="Duration Minutes"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          ROUTE STATUS
      ====================================================== */}

      <FormSection title="Route Status" description="Route availability">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<YachtFormValues> name="routes.0.active" label="Active" />
        </div>
      </FormSection>

      {/* ======================================================
          ROUTE STOPS
      ====================================================== */}

      <FormSection
        title="Route Stops"
        description="Intermediate stops during trip"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="routes.0.stops.0.name"
            label="Stop Name"
          />

          <FormInput<YachtFormValues>
            name="routes.0.stops.0.addressId"
            label="Address ID"
          />

          <FormInput<YachtFormValues>
            name="routes.0.stops.0.stopDurationMinutes"
            label="Stop Duration Minutes"
            type="number"
          />

          <FormInput<YachtFormValues>
            name="routes.0.stops.0.order"
            label="Stop Order"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          TRIP CONNECTION
      ====================================================== */}

      <FormSection
        title="Route Trip Mapping"
        description="Trip relation mapping"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormValues>
            name="routes.0.trip.0.routeId"
            label="Trip Route ID"
          />

          <FormInput<YachtFormValues>
            name="routes.0.trip.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<YachtFormValues>
            name="routes.0.trip.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />
        </div>
      </FormSection>
    </>
  );
}
