// step/availability.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";


import {
  InventoryLockStatus,
} from "@/types/common/enums";
import { CarRentalFormValues } from "../schema/core/car-rental.schema";
import { CarRentalCalendarStatus } from "@/types/bookings/car_rental/enums";

const inventoryLockStatusOptions = Object.values(InventoryLockStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

const calendarStatusOptions = Object.values(CarRentalCalendarStatus).map(
  (value) => ({
    label: value.replace(/_/g, " ").toUpperCase(),
    value,
  }),
);

export default function AvailabilityStep() {
  return (
    <>
      <FormSection
        title="Vehicle Availability Calendar"
        description="Vehicle rental availability"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="vehicle.0.calendar.0.startTime"
            label="Start Time"
            type="datetime-local"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.calendar.0.endTime"
            label="End Time"
            type="datetime-local"
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.calendar.0.status"
            label="Status"
            options={calendarStatusOptions}
          />


          <FormInput<CarRentalFormValues>
            name="vehicle.0.calendar.0.note"
            label="Note"
          />
        </div>
      </FormSection>

      <FormSection
        title="Inventory Lock"
        description="Temporary vehicle reservation"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.bookingId"
            label="Booking ID"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.vehicleId"
            label="Vehicle ID"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.userId"
            label="User ID"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.startTime"
            label="Start Time"
            type="datetime-local"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.endTime"
            label="End Time"
            type="datetime-local"
          />

          <FormSelect<CarRentalFormValues>
            name="vehicle.0.carLocks.0.status"
            label="Lock Status"
            options={inventoryLockStatusOptions}
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.quantity"
            label="Quantity"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.expiresAt"
            label="Expires At"
            type="datetime-local"
          />

          <FormInput<CarRentalFormValues>
            name="vehicle.0.carLocks.0.releasedAt"
            label="Released At"
            type="datetime-local"
          />
        </div>
      </FormSection>

      <FormSection
        title="Vehicle Current Location"
        description="Current vehicle position"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="vehicle.0.locationCurrent.addressId"
            label="Address ID"
          />
        </div>
      </FormSection>
    </>
  );
}
