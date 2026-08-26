"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSwitch } from "@/components/form/form-data";

import { AirportTransferFormSchema } from "../schema/core/schema";

export default function AvailabilityStep() {
  return (
    <>
      {/* Availability */}
      <FormSection
        title="Availability"
        description="Inventory availability status"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<AirportTransferFormSchema>
            name="availability.available"
            label="Available"
          />
        </div>
      </FormSection>

      {/* Availability Calendar */}
      <FormSection
        title="Availability Calendar"
        description="Daily inventory availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="availability.calendars.0.date"
            label="Date"
            type="date"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="availability.calendars.0.available"
            label="Calendar Available"
          />

          <FormInput<AirportTransferFormSchema>
            name="availability.calendars.0.totalVehicles"
            label="Total Vehicles"
            type="number"
            placeholder="Enter total vehicles"
          />

          <FormInput<AirportTransferFormSchema>
            name="availability.calendars.0.remainingVehicles"
            label="Remaining Vehicles"
            type="number"
            placeholder="Enter remaining vehicles"
          />

          <FormSwitch<AirportTransferFormSchema>
            name="availability.calendars.0.stopSell"
            label="Stop Sell"
          />

          <FormInput<AirportTransferFormSchema>
            name="availability.calendars.0.minimumNoticeMinutes"
            label="Minimum Notice Minutes"
            type="number"
            placeholder="Enter minimum notice time"
          />
        </div>
      </FormSection>

      {/* Blackout Dates */}
      <FormSection title="Blackout Dates" description="Unavailable dates">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<AirportTransferFormSchema>
            name="availability.blackoutDates.0.date"
            label="Date"
            type="date"
          />

          <FormInput<AirportTransferFormSchema>
            name="availability.blackoutDates.0.reason"
            label="Reason"
            placeholder="Enter blackout reason"
          />
        </div>
      </FormSection>
    </>
  );
}