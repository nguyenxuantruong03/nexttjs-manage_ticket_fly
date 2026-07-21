// step/routes.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";


import { FlyRouteType } from "@/types/bookings/ticket-fly/enums";
import { TicketFlyFormValues } from "../schema/core/fly.schema";

const routeTypeOptions = Object.values(FlyRouteType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function RoutesStep() {
  return (
    <>
      <FormSection
        title="Route Information"
        description="Flight route configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="routes.0.departureAirportId"
            label="Departure Airport ID"
          />

          <FormInput<TicketFlyFormValues>
            name="routes.0.arrivalAirportId"
            label="Arrival Airport ID"
          />

          <FormInput<TicketFlyFormValues>
            name="routes.0.distanceKm"
            label="Distance KM"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (Minutes)"
            type="number"
          />

          <FormSelect<TicketFlyFormValues>
            name="routes.0.routeType"
            label="Route Type"
            options={routeTypeOptions}
          />

          <FormSwitch<TicketFlyFormValues>
            name="routes.0.directFlight"
            label="Direct Flight"
          />
        </div>
      </FormSection>

      <FormSection
        title="Route Segments"
        description="Intermediate flight segments"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<TicketFlyFormValues>
            name="routes.0.segments.0.segmentOrder"
            label="Segment Order"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="routes.0.segments.0.estimatedDuration"
            label="Estimated Duration"
            type="number"
          />

          <FormInput<TicketFlyFormValues>
            name="routes.0.segments.0.distanceKm"
            label="Distance KM"
            type="number"
          />
        </div>
      </FormSection>
    </>
  );
}
