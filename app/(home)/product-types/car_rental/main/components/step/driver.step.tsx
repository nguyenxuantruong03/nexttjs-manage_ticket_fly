// step/drivers.step.tsx

"use client";

import FormSection from "@/components/form/FormSection";
import { FormInput, FormSelect } from "@/components/form/form-data";

import { CarRentalFormSchema } from "../form/schema/core/car-rental.schema";
import { DriverStatus } from "@/types/product-types/car_rental/enums";

const driverStatusOptions = Object.values(DriverStatus).map((value) => ({
  label: value.replace(/_/g, " ").toUpperCase(),
  value,
}));

export default function DriversStep() {
  return (
    <>
      <FormSection title="Drivers" description="Additional driver management">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput<CarRentalFormSchema>
            name="drivers.0.name"
            label="Driver Name"
          />

          <FormInput<CarRentalFormSchema>
            name="drivers.0.phone"
            label="Phone"
          />

          <FormInput<CarRentalFormSchema>
            name="drivers.0.languages.0"
            label="Language"
          />

          <FormInput<CarRentalFormSchema>
            name="drivers.0.experienceYears"
            label="Experience Years"
            type="number"
          />

          <FormInput<CarRentalFormSchema>
            name="drivers.0.rating"
            label="Rating"
            type="number"
          />

          <FormSelect<CarRentalFormSchema>
            name="drivers.0.status"
            label="Status"
            options={driverStatusOptions}
          />

          <FormInput<CarRentalFormSchema>
            name="drivers.0.image"
            label="Image"
          />
        </div>
      </FormSection>
    </>
  );
}
