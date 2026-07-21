// step/operation.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect, FormSwitch } from "@/components/form/form-data";


import { WeekDay } from "@/types/common/enums";

import {
  PickupInstructionType,
  DriverStatus,
  DriverOption,
} from "@/types/bookings/car_rental/enums";
import { CarRentalFormValues } from "../schema/core/car-rental.schema";

const weekDayOptions = Object.values(WeekDay).map((value) => ({
  label: value.toUpperCase(),
  value,
}));

const pickupTypeOptions = Object.values(PickupInstructionType).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const driverStatusOptions = Object.values(DriverStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

const driverOptionOptions = Object.values(DriverOption).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function OperationStep() {
  return (
    <>
      <FormSection
        title="Driver Option"
        description="Rental driver configuration"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormValues>
            name="driverOption"
            label="Driver Option"
            options={driverOptionOptions}
          />
        </div>
      </FormSection>

      <FormSection
        title="Business Hours"
        description="Rental operating schedule"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormValues>
            name="businessHours.0.day"
            label="Day"
            options={weekDayOptions}
          />

          <FormInput<CarRentalFormValues>
            name="businessHours.0.openTime"
            label="Open Time"
            type="time"
          />

          <FormInput<CarRentalFormValues>
            name="businessHours.0.closeTime"
            label="Close Time"
            type="time"
          />

          <FormSwitch<CarRentalFormValues>
            name="businessHours.0.closed"
            label="Closed"
          />
        </div>
      </FormSection>

      <FormSection
        title="Pickup Instructions"
        description="Vehicle pickup guidance"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <FormSelect<CarRentalFormValues>
            name="pickupInstructions.0.type"
            label="Instruction Type"
            options={pickupTypeOptions}
          />

          <FormInput<CarRentalFormValues>
            name="pickupInstructions.0.title"
            label="Title"
          />

          <FormInput<CarRentalFormValues>
            name="pickupInstructions.0.description"
            label="Description"
          />

          <FormInput<CarRentalFormValues>
            name="pickupInstructions.0.location"
            label="Location"
          />

          <FormInput<CarRentalFormValues>
            name="pickupInstructions.0.contactPhone"
            label="Contact Phone"
          />
        </div>
      </FormSection>

      <FormSection title="Drivers" description="Additional driver management">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormValues>
            name="drivers.0.name"
            label="Driver Name"
          />

          <FormInput<CarRentalFormValues>
            name="drivers.0.phone"
            label="Phone"
          />

          <FormInput<CarRentalFormValues>
            name="drivers.0.experienceYears"
            label="Experience Years"
            type="number"
          />

          <FormInput<CarRentalFormValues>
            name="drivers.0.rating"
            label="Rating"
            type="number"
          />

          <FormSelect<CarRentalFormValues>
            name="drivers.0.status"
            label="Status"
            options={driverStatusOptions}
          />

          <FormInput<CarRentalFormValues>
            name="drivers.0.image"
            label="Image"
          />

          <FormInput<CarRentalFormValues>
            name="drivers.0.languages.0"
            label="Language"
          />
        </div>
      </FormSection>
    </>
  );
}
