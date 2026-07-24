// step/trips.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";

import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import { YachtTripStatus, YachtRepeatType } from "@/types/bookings/yacht/enums";

import { InventoryLockStatus } from "@/types/common/enums";
import { YachtFormSchema } from "../schema/core/yacht.schema";

const tripStatusOptions = Object.values(YachtTripStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const repeatTypeOptions = Object.values(YachtRepeatType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const inventoryLockStatusOptions = Object.values(InventoryLockStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function TripsStep() {
  return (
    <>
      {/* ======================================================
          TRIP INFORMATION
      ====================================================== */}

      <FormSection
        title="Trip Information"
        description="Yacht trip schedule information"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema> name="trips.0.routeId" label="Route ID" />

          <FormInput<YachtFormSchema>
            name="trips.0.departureTime"
            label="Departure Time"
            type="datetime-local"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.arrivalTime"
            label="Arrival Time"
            type="datetime-local"
          />

          <FormSelect<YachtFormSchema>
            name="trips.0.status"
            label="Trip Status"
            options={tripStatusOptions}
          />

          <FormInput<YachtFormSchema>
            name="trips.0.maxGuests"
            label="Maximum Guests"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          SCHEDULE
      ====================================================== */}

      <FormSection title="Trip Schedule" description="Recurring trip schedule">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<YachtFormSchema>
            name="trips.0.schedule.repeatType"
            label="Repeat Type"
            options={repeatTypeOptions}
          />

          <FormInput<YachtFormSchema>
            name="trips.0.schedule.daysOfWeek.0"
            label="Day Of Week"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.schedule.startDate"
            label="Start Date"
            type="date"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.schedule.endDate"
            label="End Date"
            type="date"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.schedule.departureTime"
            label="Departure Time"
          />
        </div>
      </FormSection>

      {/* ======================================================
          TRIP PRICE
      ====================================================== */}

      <FormSection title="Trip Price" description="Trip final pricing">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="trips.0.price.amount"
            label="Amount"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.price.originalAmount"
            label="Original Amount"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.price.tax"
            label="Tax"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.price.serviceFee"
            label="Service Fee"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.price.discount"
            label="Discount"
            type="number"
          />

          <FormInput<YachtFormSchema>
            name="trips.0.price.finalAmount"
            label="Final Amount"
            type="number"
          />
        </div>
      </FormSection>

      {/* ======================================================
          AVAILABILITY
      ====================================================== */}

      <FormSection
        title="Availability"
        description="Trip availability calendar"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="availability.calendar.0.date"
            label="Date"
            type="date"
          />

          <FormSwitch<YachtFormSchema>
            name="availability.calendar.0.available"
            label="Available"
          />

          <FormSwitch<YachtFormSchema>
            name="availability.calendar.0.booked"
            label="Booked"
          />

          <FormSwitch<YachtFormSchema>
            name="availability.calendar.0.stopSell"
            label="Stop Sell"
          />
        </div>
      </FormSection>

      {/* ======================================================
          INVENTORY LOCK
      ====================================================== */}

      <FormSection
        title="Inventory Lock"
        description="Temporary trip reservation lock"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<YachtFormSchema>
            name="locks.0.availabilityId"
            label="Availability ID"
          />

          <FormInput<YachtFormSchema> name="locks.0.tripId" label="Trip ID" />

          <FormInput<YachtFormSchema> name="locks.0.userId" label="User ID" />

          <FormInput<YachtFormSchema>
            name="locks.0.quantity"
            label="Quantity"
            type="number"
          />

          <FormSelect<YachtFormSchema>
            name="locks.0.status"
            label="Lock Status"
            options={inventoryLockStatusOptions}
          />

          <FormInput<YachtFormSchema>
            name="locks.0.startTime"
            label="Start Time"
            type="datetime-local"
          />

          <FormInput<YachtFormSchema>
            name="locks.0.endTime"
            label="End Time"
            type="datetime-local"
          />

          <FormInput<YachtFormSchema>
            name="locks.0.expiresAt"
            label="Expires At"
            type="datetime-local"
          />

          <FormInput<YachtFormSchema>
            name="locks.0.releasedAt"
            label="Released At"
            type="datetime-local"
          />
        </div>
      </FormSection>
    </>
  );
}
