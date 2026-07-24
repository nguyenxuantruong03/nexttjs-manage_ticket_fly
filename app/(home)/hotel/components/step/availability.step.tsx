// step/availability.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSwitch, FormSelect } from "@/components/form/form-data";

import { HotelFormSchema } from "../schema";

import { InventoryLockStatus } from "@/types/common/enums";

const inventoryLockStatusOptions = Object.values(InventoryLockStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function AvailabilityStep() {
  return (
    <>
      <FormSection title="Availability" description="Current room availability">
        <div className="grid gap-6 md:grid-cols-2">
          <FormSwitch<HotelFormSchema>
            name="inventory.0.availability.isAvailable"
            label="Available"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.availability.availableRooms"
            label="Available Rooms"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.availability.lastUpdated"
            label="Last Updated"
            type="datetime-local"
          />
        </div>
      </FormSection>

      <FormSection
        title="Availability Calendar"
        description="Daily room availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="inventory.0.availability.calendar.0.date"
            label="Date"
            type="date"
          />

          <FormSwitch<HotelFormSchema>
            name="inventory.0.availability.calendar.0.available"
            label="Available"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.availability.calendar.0.remainingRooms"
            label="Remaining Rooms"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.availability.calendar.0.priceOverride"
            label="Price Override"
            type="number"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.availability.calendar.0.minimumStay"
            label="Minimum Stay"
            type="number"
          />

          <FormSwitch<HotelFormSchema>
            name="inventory.0.availability.calendar.0.stopSell"
            label="Stop Sell"
          />

          <FormSwitch<HotelFormSchema>
            name="inventory.0.availability.calendar.0.closedToArrival"
            label="Closed To Arrival"
          />

          <FormSwitch<HotelFormSchema>
            name="inventory.0.availability.calendar.0.closedToDeparture"
            label="Closed To Departure"
          />
        </div>
      </FormSection>

      <FormSection
        title="Inventory Lock"
        description="Temporary inventory reservation"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.ratePlanId"
            label="Rate Plan ID"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.userId"
            label="User ID"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.bookingId"
            label="Booking ID"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.quantity"
            label="Quantity"
            type="number"
          />

          <FormSelect<HotelFormSchema>
            name="inventory.0.locks.0.status"
            label="Status"
            options={inventoryLockStatusOptions}
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.startTime"
            label="Start Time"
            type="datetime-local"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.endTime"
            label="End Time"
            type="datetime-local"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.expiresAt"
            label="Expires At"
            type="datetime-local"
          />

          <FormInput<HotelFormSchema>
            name="inventory.0.locks.0.releasedAt"
            label="Released At"
            type="datetime-local"
          />
        </div>
      </FormSection>
    </>
  );
}
