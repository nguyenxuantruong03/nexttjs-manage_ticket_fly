"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { AirportTransferRouteType } from "@/types/bookings/airport-transfer/enums";

import { WeekDay } from "@/types/common/enums";
import { AirportTransferFormSchema } from "../schema/core/schema";

const routeTypeOptions = Object.values(AirportTransferRouteType).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value.toUpperCase(),
  value,
}));

export default function RouteStep() {
  return (
    <>
      {/* Route */}
      <FormSection
        title="Route"
        description="Airport transfer route information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<AirportTransferFormSchema>
            name="routes.0.type"
            label="Route Type"
            options={routeTypeOptions}
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.departureAddressId"
            label="Departure Address ID"
            placeholder="Enter departure address ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.arrivalAddressId"
            label="Arrival Address ID"
            placeholder="Enter arrival address ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.distanceKm"
            label="Distance KM"
            type="number"
            placeholder="Enter route distance in KM"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.estimatedDuration"
            label="Estimated Duration (minutes)"
            type="number"
            placeholder="Enter estimated duration"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="routes.0.active"
            label="Active"
          />
        </div>
      </FormSection>

      {/* Route Stops */}
      <FormSection title="Route Stops" description="Intermediate stops">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.addressId"
            label="Stop Address ID"
            placeholder="Enter stop address ID"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.stopOrder"
            label="Stop Order"
            type="number"
            placeholder="Enter stop order"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.estimatedArrival"
            label="Estimated Arrival (minutes)"
            type="number"
            placeholder="Enter estimated arrival time"
          />

          <FormInput<AirportTransferFormSchema>
            name="routes.0.stops.0.waitingMinutes"
            label="Waiting Minutes"
            type="number"
            placeholder="Enter waiting minutes"
          />
        </div>
      </FormSection>

      {/* Schedule */}
      <FormSection title="Schedule" description="Operating schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="schedules.0.departureTime"
            label="Departure Time"
            type="time"
          />

          <FormInput<AirportTransferFormSchema>
            name="schedules.0.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<AirportTransferFormSchema>
            name="schedules.0.endDate"
            label="End Date"
            type="date"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="schedules.0.active"
            label="Active"
          />
        </div>

        <div className="grid gap-6 mt-6">
          {weekDayOptions.map((day, index) => (
            <FormSwitch<AirportTransferFormSchema>
              key={day.value}
              name={`schedules.0.operatingDays.${index}` as any}
              label={day.label}
            />
          ))}
        </div>
      </FormSection>
    </>
  );
}
